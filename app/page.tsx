"use client";
import { Mail, Lock, Chrome } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

export default function Home() {
  const router = useRouter();

  return (
    <div className="
      min-h-screen 
      grid grid-cols-1 
      lg:grid-cols-2 
      bg-background
    "
    >
      {/* LEFT SIDE — LOGIN FORM */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          flex items-center justify-center
          px-6 py-14 
          sm:px-10 sm:py-20
          md:px-14
        "
      >
        <div className="w-full max-w-sm p-2 rounded-2xl">

        <div className=" mb-6 text-center md:hdden">
           <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Welcome Back</h1>
           <p className="text-sm text-muted-foreground mt-1">
             Sign in to your account to continue
           </p>
        </div>
          {/* Email */}
          <div className="mb-4">
            <label className="mb-1 block text-sm text-muted-foreground">
              Email
            </label>
            <div className="
              flex items-center gap-2 
              rounded-lg border 
              border-zinc-300 dark:border-zinc-700 
              bg-white dark:bg-zinc-900 
              px-3 py-2
            ">
              <Mail size={18} className="text-zinc-500 dark:text-zinc-400" />
              <input
                type="email"
                placeholder="you@example.com"
                className="
                  w-full bg-transparent 
                  text-sm text-foreground 
                  outline-none
                "
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="mb-1 block text-sm text-muted-foreground">
              Password
            </label>
            <div className="
              flex items-center gap-2 
              rounded-lg border 
              border-zinc-300 dark:border-zinc-700 
              bg-white dark:bg-zinc-900 
              px-3 py-2
            ">
              <Lock size={18} className="text-zinc-500 dark:text-zinc-400" />
              <input
                type="password"
                placeholder="••••••••"
                className="
                  w-full bg-transparent 
                  text-sm text-foreground 
                  outline-none
                "
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            onClick={() => router.push("/dashboard")}
            className="
              mb-4 w-full rounded-lg 
              bg-black text-white 
              dark:bg-white dark:text-black
              py-2 cursor-pointer
              transition duration-200 
              hover:bg-zinc-800 dark:hover:bg-zinc-200
            "
          >
            Sign In
          </button>

          {/* OR Divider */}
          <div className="my-3 flex items-center justify-center gap-2">
            <div className="h-[1px] flex-1 bg-zinc-300 dark:bg-zinc-700" />
            <span className="text-xs text-muted-foreground">OR</span>
            <div className="h-[1px] flex-1 bg-zinc-300 dark:bg-zinc-700" />
          </div>

          {/* Google Button */}
          <button
            onClick={() => router.push("/dashboard")}
            className="
              flex w-full items-center justify-center gap-2 
              rounded-lg border 
              border-zinc-300 dark:border-zinc-700 
              bg-white dark:bg-zinc-900 
              py-2 text-sm 
              text-zinc-700 dark:text-white 
              hover:bg-zinc-100 dark:hover:bg-zinc-800 
              transition cursor-pointer
            "
          >
            <Chrome size={16} />
            Sign in with Google
          </button>
        </div>
      </motion.div>

      {/* RIGHT SIDE — TEXT HERO */}
      <div className="
        hidden lg:flex 
        flex-col justify-center items-start 
        bg-black p-10 xl:p-16 
        relative
      ">
        <div className="
          absolute inset-0 
          opacity-40 blur-3xl 
          bg-gradient-to-br 
          from-zinc-700/20 to-black
        " />

        <motion.div
          className="relative z-10 max-w-lg"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.p
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="uppercase tracking-widest text-xs text-zinc-400 mb-4"
          >
            AI Learning Platform
          </motion.p>

          <motion.h2
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="
              text-3xl xl:text-4xl 
              font-bold leading-tight text-white mb-4
            "
          >
            Learn Smarter.
            <span className="
              block bg-gradient-to-r 
              from-white to-zinc-400 
              bg-clip-text text-transparent
            ">
              Progress Faster.
            </span>
          </motion.h2>

          <motion.p
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="
              text-zinc-300 text-sm 
              leading-relaxed max-w-md
            "
          >
            Stay on top of your courses, track progress and continue your
            learning journey with personalized AI-powered insights.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="mt-8 h-[1px] w-20 bg-zinc-700 rounded-full"
          />

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="mt-6 space-y-3 text-zinc-300 text-sm"
          >
            <p>• Track lesson completion in real-time</p>
            <p>• Understand concepts faster with AI summaries</p>
            <p>• Personalized course recommendations</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}