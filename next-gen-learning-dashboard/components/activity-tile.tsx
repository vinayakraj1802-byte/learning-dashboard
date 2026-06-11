"use client";

import { motion, type Variants } from "framer-motion";

const weeks = Array.from({ length: 42 }, (_, index) => {
  const levels = [0.12, 0.22, 0.38, 0.58, 0.78, 0.95];
  return levels[(index * 7 + Math.floor(index / 3)) % levels.length];
});

export function ActivityTile({ variants }: { variants: Variants }) {
  return (
    <motion.article
      variants={variants}
      whileHover={{ scale: 1.014, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative overflow-hidden rounded-[8px] border border-line bg-white/[0.045] p-5 shadow-card lg:col-span-2 xl:col-span-2"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(124,247,199,0.14),transparent_35%)]" />
      <div className="relative z-10">
        <header className="flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Activity</p>
            <h2 className="mt-2 text-xl font-semibold text-white">Learning pulse</h2>
          </div>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-mint">+12%</span>
        </header>

        <div className="mt-8 grid grid-cols-7 gap-2" aria-label="Six week contribution graph">
          {weeks.map((level, index) => (
            <motion.span
              key={index}
              className="aspect-square rounded-[4px] bg-mint"
              initial={{ opacity: 0, scale: 0.72 }}
              animate={{ opacity: level, scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 22, delay: 0.12 + index * 0.008 }}
            />
          ))}
        </div>

        <p className="mt-6 text-sm leading-6 text-slate-400">
          Strongest on Tuesday evenings. The system moved your tougher labs into that window.
        </p>
      </div>
    </motion.article>
  );
}
