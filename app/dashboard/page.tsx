"use client";

import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import CourseCard from "@/components/CourseCard";
import { useState } from "react";
import { courses as mockCourses } from "@/data/courses";

const Page = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [search, setSearch] = useState("");

  const filteredCourses = mockCourses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-background overflow-hidden">

      {/* SIDEBAR */}
      <SideBar activeItem={activeItem} setActiveItem={setActiveItem} />

      {/* SPACER — on mobile, sidebar is fixed so we need this 
          to push content right by 60px (collapsed sidebar width) */}
      <div className="w-[60px] shrink-0 lg:hidden" />

      {/* MAIN SECTION */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <div className="sticky top-0 z-40">
          <TopBar activeItem={activeItem} setSearch={setSearch} />
        </div>

        {/* CONTENT AREA */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 text-zinc-800 dark:text-zinc-100">
          <h1 className="text-xl sm:text-2xl font-bold mb-4">Courses</h1>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))
            ) : (
              <p className="text-zinc-600 dark:text-zinc-400 mt-10 col-span-full text-center">
                No courses found.
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page;