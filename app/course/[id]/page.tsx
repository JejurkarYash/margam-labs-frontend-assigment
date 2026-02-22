"use client";

import { use } from "react";
import { courses } from "@/data/courses";
import { motion } from "motion/react";
import { PlayCircle, Clock, CheckCircle, BookOpen } from "lucide-react";

const CoursePage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
        <p className="text-zinc-700 dark:text-zinc-300">
          The course you are looking for does not exist.
        </p>
      </div>
    );
  }

  const lessons = [
    "Introduction to the Course",
    "What is AI?",
    "Neural Networks Basics",
    "Training Your First Model",
    "Final Project Overview",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="p-4 sm:p-6 space-y-12 sm:space-y-16 max-w-5xl mx-auto"
    >
      {/* HEADER SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="space-y-2"
      >
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
          {course.title}
        </h1>

        <p className="text-zinc-600 dark:text-zinc-400 flex items-center gap-2 text-sm sm:text-base">
          <Clock size={16} /> 4h 20m total • Beginner Friendly
        </p>
      </motion.section>

      {/* BANNER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="
          h-48 sm:h-64 rounded-xl shadow-md w-full
          bg-gradient-to-br from-zinc-100 to-zinc-200 
          dark:from-zinc-800 dark:to-zinc-900
          border border-zinc-200/40 dark:border-zinc-800
        "
      />

      {/* PROGRESS + ACTION */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="space-y-4"
      >
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Progress • <span className="font-medium">{course.progress}%</span>
        </p>

        <div className="h-2 w-full bg-zinc-300 dark:bg-zinc-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${course.progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-full bg-black dark:bg-white rounded-full"
          />
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="
            inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium
            bg-black text-white dark:bg-white dark:text-black
            hover:opacity-90 transition shadow-sm
          "
        >
          <PlayCircle size={18} />
          Continue Learning
        </motion.button>
      </motion.section>

      {/* WHAT YOU'LL LEARN */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.4 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
          What You’ll Learn
        </h2>

        <div className="space-y-3">
          {[
            "Fundamentals of AI",
            "How Neural Networks Work",
            "Building & Training Models",
            "Evaluating Model Accuracy",
            "Deploying AI Applications",
          ].map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.28 + index * 0.05 }}
              className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300"
            >
              <CheckCircle
                size={18}
                className="text-green-600 dark:text-green-400"
              />
              <span>{point}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* LESSONS SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
          Lessons
        </h2>

        <div className="space-y-3">
          {lessons.map((lesson, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.32 + i * 0.06 }}
              whileHover={{ scale: 1.02 }}
              className="
                group cursor-pointer
                p-4 rounded-lg border
                border-zinc-200 dark:border-zinc-700
                bg-white dark:bg-zinc-900
                hover:bg-zinc-100 dark:hover:bg-zinc-800 
                transition-all flex items-center gap-4
              "
            >
              <div
                className="
                  h-9 w-9 flex items-center justify-center rounded-md
                  bg-zinc-200 dark:bg-zinc-700
                  group-hover:bg-zinc-300 dark:group-hover:bg-zinc-600
                  transition
                "
              >
                <BookOpen size={18} className="text-zinc-700 dark:text-zinc-200" />
              </div>

              <span className="text-zinc-900 dark:text-zinc-200 font-medium text-sm sm:text-base">
                {i + 1}. {lesson}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default CoursePage;