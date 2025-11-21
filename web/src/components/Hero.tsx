import { monthlyGoal } from '@/data/plan';

const Hero = () => (
  <section className="relative mx-auto max-w-4xl text-center">
    <div className="pointer-events-none absolute inset-x-10 -top-20 h-40 rounded-full bg-blue-500/30 blur-3xl" />
    <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/60">
      Free AI Masterplan
    </p>
    <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
      90-Day Roadmap to Create a ${monthlyGoal.toLocaleString()} / Month Income Stack
    </h1>
    <p className="mt-5 text-base leading-relaxed text-slate-100/80 sm:text-lg">
      Execute a layered strategy that compounds free AI leverage into predictable revenue. Each move
      is sequenced for momentum: research, capture, validate, pre-sell, and scale — with precise
      deliverables, KPIs, and tool stacks.
    </p>
  </section>
);

export default Hero;
