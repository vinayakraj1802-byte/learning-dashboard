"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { AlertTriangle, CalendarDays, Flame, TimerReset } from "lucide-react";
import { ActivityTile } from "@/components/activity-tile";
import { CourseCard } from "@/components/course-card";
import type { CourseQuery } from "@/lib/types";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.08
    }
  }
};

const tile: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

export function BentoGrid({ query }: { query: CourseQuery }) {
  const averageProgress = Math.round(
    query.courses.reduce((total, course) => total + course.progress, 0) / Math.max(query.courses.length, 1)
  );

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="grid auto-rows-[minmax(168px,auto)] grid-cols-1 gap-4 lg:grid-cols-4 xl:grid-cols-6"
      aria-label="Student dashboard"
    >
      <motion.article
        variants={tile}
        whileHover={{ scale: 1.012, y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="mesh relative overflow-hidden rounded-[8px] border border-line p-6 shadow-card lg:col-span-4 xl:col-span-4"
      >
        <div className="relative z-10 flex h-full min-h-[260px] flex-col justify-between gap-8">
          <header className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-mint">Thursday focus</p>
              <h1 className="mt-3 max-w-2xl text-4xl font-semibold leading-[1.05] text-white sm:text-5xl">
                Welcome back, Mira
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">
                Your next sprint is ready: one server-rendered lesson, one motion lab, and a short reflection before the streak locks in.
              </p>
            </div>
            <aside className="rounded-[8px] border border-white/15 bg-black/25 px-4 py-3 backdrop-blur">
              <span className="flex items-center gap-2 text-sm text-slate-300">
                <Flame size={17} className="text-ember" />
                Learning streak
              </span>
              <strong className="mt-2 block text-4xl font-semibold text-white">18</strong>
              <span className="text-xs text-slate-400">days active</span>
            </aside>
          </header>

          <dl className="grid grid-cols-3 gap-3">
            <Metric icon={<TimerReset size={17} />} label="Today" value="42m" />
            <Metric icon={<CalendarDays size={17} />} label="Due" value="2 labs" />
            <Metric icon={<Flame size={17} />} label="Avg." value={`${averageProgress}%`} />
          </dl>
        </div>
      </motion.article>

      <ActivityTile variants={tile} />

      {query.error ? (
        <motion.aside
          variants={tile}
          className="rounded-[8px] border border-ember/30 bg-ember/10 p-4 text-sm text-amber-100 lg:col-span-2 xl:col-span-2"
        >
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 shrink-0 text-ember" size={18} />
            <p>
              <strong className="block text-white">{query.isPreview ? "Preview data active" : "Data warning"}</strong>
              {query.error}
            </p>
          </div>
        </motion.aside>
      ) : null}

      {query.courses.map((course) => (
        <CourseCard key={course.id} course={course} variants={tile} />
      ))}
    </motion.section>
  );
}

function Metric({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-[8px] border border-white/10 bg-black/20 p-3">
      <dt className="flex items-center gap-2 text-xs text-slate-400">{icon}{label}</dt>
      <dd className="mt-2 text-lg font-semibold text-white">{value}</dd>
    </div>
  );
}
