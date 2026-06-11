export function BentoSkeleton() {
  return (
    <section className="grid auto-rows-[minmax(168px,auto)] grid-cols-1 gap-4 lg:grid-cols-4 xl:grid-cols-6" aria-label="Loading dashboard">
      <SkeletonBlock className="min-h-[300px] lg:col-span-4 xl:col-span-4" />
      <SkeletonBlock className="min-h-[300px] lg:col-span-2 xl:col-span-2" />
      <SkeletonBlock className="min-h-[224px] lg:col-span-2 xl:col-span-2" />
      <SkeletonBlock className="min-h-[224px] lg:col-span-2 xl:col-span-2" />
      <SkeletonBlock className="min-h-[224px] lg:col-span-2 xl:col-span-2" />
    </section>
  );
}

function SkeletonBlock({ className }: { className: string }) {
  return (
    <article className={`relative overflow-hidden rounded-[8px] border border-line bg-white/[0.045] p-5 ${className}`}>
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="relative space-y-4">
        <div className="h-10 w-10 rounded-[8px] bg-white/10" />
        <div className="h-4 w-3/5 rounded-full bg-white/10" />
        <div className="h-4 w-4/5 rounded-full bg-white/10" />
        <div className="h-2 w-full rounded-full bg-white/10" />
      </div>
    </article>
  );
}
