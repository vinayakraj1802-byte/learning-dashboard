"use client";

import { PropsWithChildren, useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, BookOpenCheck, Home, Menu, Settings, Sparkles } from "lucide-react";

const items = [
  { label: "Home", icon: Home },
  { label: "Courses", icon: BookOpenCheck },
  { label: "Labs", icon: Sparkles },
  { label: "Stats", icon: BarChart3 },
  { label: "Settings", icon: Settings }
];

export function DashboardShell({ children }: PropsWithChildren) {
  const [active, setActive] = useState("Home");
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="grain relative min-h-screen overflow-hidden">
      <div className="mx-auto flex min-h-screen w-full max-w-[1480px] gap-4 px-4 py-4 pb-24 md:px-5 md:py-5 md:pb-5">
        <aside
          className={[
            "sticky top-5 hidden h-[calc(100vh-2.5rem)] shrink-0 rounded-[8px] border border-line bg-white/[0.045] p-3 shadow-card backdrop-blur-xl md:block",
            expanded ? "w-64" : "w-[88px]",
            "transition-[width] duration-300 ease-out"
          ].join(" ")}
        >
          <header className="flex h-12 items-center justify-between">
            <a href="#" className="flex min-w-0 items-center gap-3" aria-label="Astra dashboard home">
              <span className="grid size-10 shrink-0 place-items-center rounded-[8px] bg-mint text-slate-950">
                <Sparkles size={20} />
              </span>
              <span className={expanded ? "truncate text-sm font-semibold" : "sr-only"}>Astra Learn</span>
            </a>
            <button
              type="button"
              aria-label="Toggle sidebar"
              onClick={() => setExpanded((value) => !value)}
              className="grid size-10 shrink-0 place-items-center rounded-[8px] text-slate-300 transition-colors hover:bg-white/[0.07]"
            >
              <Menu size={18} />
            </button>
          </header>

          <nav aria-label="Primary" className="mt-8 space-y-1">
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.label;
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setActive(item.label)}
                  className="relative flex h-12 w-full items-center gap-3 rounded-[8px] px-3 text-sm text-slate-300 outline-none transition-colors hover:text-white"
                  aria-current={isActive ? "page" : undefined}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="nav-highlight"
                      className="absolute inset-0 rounded-[8px] bg-white/[0.09] shadow-glow"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    />
                  ) : null}
                  <Icon className="relative shrink-0" size={19} />
                  <span className={expanded ? "relative truncate" : "sr-only"}>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        <main className="relative z-10 min-w-0 flex-1">{children}</main>
      </div>

      <nav
        aria-label="Mobile primary"
        className="fixed inset-x-3 bottom-3 z-30 grid grid-cols-5 rounded-[8px] border border-line bg-[#101218]/90 p-1 shadow-card backdrop-blur-xl md:hidden"
      >
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.label;
          return (
            <button
              key={item.label}
              type="button"
              onClick={() => setActive(item.label)}
              className="relative grid h-12 place-items-center rounded-[8px] text-slate-300"
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
            >
              {isActive ? (
                <motion.span
                  layoutId="mobile-nav-highlight"
                  className="absolute inset-0 rounded-[8px] bg-white/[0.1]"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                />
              ) : null}
              <Icon className="relative" size={19} />
            </button>
          );
        })}
      </nav>
    </div>
  );
}
