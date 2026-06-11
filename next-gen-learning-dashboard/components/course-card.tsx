"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { resolveCourseIcon } from "@/lib/icons";
import type { Course } from "@/lib/types";

export function CourseCard({ course, variants }: { course: Course; variants: Variants }) {
  const Icon = resolveCourseIcon(course.icon_name);

  return (
    <motion.article
      variants={variants}
      whileHover={{ scale: 1.018, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative min-h-[224px] overflow-hidden rounded-[8px] border border-line bg-white/[0.045] p-5 shadow-card lg:col-span-2 xl:col-span-2"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(124,247,199,0.16),transparent_32%),radial-gradient(circle_at_88%_78%,rgba(167,139,250,0.13),transparent_34%)] opacity-80" />
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-px rounded-[8px] bg-[linear-gradient(135deg,rgba(124,247,199,0.18),transparent_42%,rgba(255,184,107,0.14))]" />
      </div>

      <div className="relative z-10 flex h-full min-h-[184px] flex-col justify-between">
        <header className="flex items-start justify-between gap-4">
          <span className="grid size-12 place-items-center rounded-[8px] border border-white/12 bg-black/25 text-mint">
            <Icon size={22} />
          </span>
          <button
            type="button"
            aria-label={`Open ${course.title}`}
            className="grid size-9 place-items-center rounded-[8px] text-slate-400 transition-colors hover:bg-white/[0.08] hover:text-white"
          >
            <ArrowUpRight size={17} />
          </button>
        </header>

        <section aria-labelledby={`course-${course.id}`}>
          <h2 id={`course-${course.id}`} className="text-xl font-semibold leading-tight text-white">
            {course.title}
          </h2>
          <div className="mt-5">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
              <motion.span
                className="block h-full rounded-full bg-gradient-to-r from-mint via-emerald-300 to-ember"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: course.progress / 100 }}
                transition={{ type: "spring", stiffness: 120, damping: 24, delay: 0.35 }}
                style={{ originX: 0 }}
              />
            </div>
          </div>
        </section>
      </div>
    </motion.article>
  );
}
