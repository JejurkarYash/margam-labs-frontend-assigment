"use client";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";

const CourseCard = ({ course }: { course: { id: number; title: string; progress: number } }) => {
  const router = useRouter();
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="
        p-4 rounded-xl 
        bg-white dark:bg-zinc-900 
        border border-zinc-200 dark:border-zinc-800 
        shadow-sm hover:shadow-md 
        transition cursor-pointer
      "
      onClick={() => router.push(`/course/${course.id}`)}
    >
      {/* Title */}
      <h3 className="font-semibold text-lg text-zinc-800 dark:text-zinc-100">
        {course.title}
      </h3>

      {/* Progress Text */}
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
        Progress: {course.progress}%
      </p>

      {/* Progress Bar */}
      <div className="w-full mt-3 h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-black dark:bg-white rounded-full transition-all"
          style={{ width: `${course.progress}%` }}
        ></div>
      </div>
    </motion.div>
  );
};

export default CourseCard;