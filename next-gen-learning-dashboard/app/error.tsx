"use client";

import { RotateCw } from "lucide-react";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ink px-6 text-slate-100">
      <section className="max-w-md rounded-[8px] border border-line bg-white/[0.04] p-6 shadow-card">
        <p className="text-sm uppercase tracking-[0.2em] text-mint">Dashboard paused</p>
        <h1 className="mt-3 text-2xl font-semibold">The learning data could not be loaded.</h1>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          Check the Supabase environment variables and table policies, then try again.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-5 inline-flex items-center gap-2 rounded-[8px] bg-mint px-4 py-2 text-sm font-semibold text-slate-950"
        >
          <RotateCw size={16} />
          Retry
        </button>
      </section>
    </main>
  );
}
