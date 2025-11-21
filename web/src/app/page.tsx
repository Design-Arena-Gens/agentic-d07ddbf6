import Hero from '@/components/Hero';
import DailyRhythmCard from '@/components/DailyRhythmCard';
import IncomeStreamCard from '@/components/IncomeStreamCard';
import PhaseCard from '@/components/PhaseCard';
import RiskCard from '@/components/RiskCard';
import {
  dailyRhythm,
  incomeStreams,
  kpiScorecard,
  monthlyGoal,
  risks,
  timeline
} from '@/data/plan';

const Page = () => (
  <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-4 pb-16 pt-20 sm:px-8 md:px-12">
    <Hero />

    <section className="space-y-6">
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">Phases</p>
        <h2 className="mt-2 text-3xl font-semibold text-white">12-Week Execution Timeline</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-100/80">
          Each phase builds on the previous one to accelerate validation, pre-sell momentum, and
          recurring revenue. Move forward only when you hit the leading indicators listed.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {timeline.map((phase, index) => (
          <PhaseCard key={phase.id} phase={phase} index={index} />
        ))}
      </div>
    </section>

    <section className="space-y-6">
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">Revenue Stack</p>
        <h2 className="mt-2 text-3xl font-semibold text-white">Layered Income Streams</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-100/80">
          Combine service sprints, productized templates, community leverage, and performance deals
          to reach ${monthlyGoal.toLocaleString()} in resilient monthly revenue.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {incomeStreams.map((stream) => (
          <IncomeStreamCard key={stream.name} stream={stream} />
        ))}
      </div>
    </section>

    <section className="space-y-6">
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">Operating System</p>
        <h2 className="mt-2 text-3xl font-semibold text-white">Daily Execution Rhythm</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-100/80">
          Cadence keeps momentum compounding. This schedule ensures daily shipping, audience growth,
          and fulfillment without burning through free tool limits.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dailyRhythm.map((slot) => (
          <DailyRhythmCard key={slot.block} slot={slot} />
        ))}
      </div>
    </section>

    <section className="space-y-6">
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">Instrumentation</p>
        <h2 className="mt-2 text-3xl font-semibold text-white">KPI Scorecard</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-100/80">
          Review leading indicators weekly. If a metric lags, trigger the matching experiment or
          mitigation plan immediately.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {kpiScorecard.map((item) => (
          <div
            key={item.metric}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-800/60 p-5 text-sm text-slate-100/85 shadow-lg shadow-slate-950/40"
          >
            <h3 className="text-lg font-semibold text-white">{item.metric}</h3>
            <p className="mt-2 text-emerald-200">Target: {item.target}</p>
            <p className="mt-1 text-white/70">Cadence: {item.cadence}</p>
            <p className="mt-1 text-white/70">Tooling: {item.tool}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="space-y-6">
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">Resilience</p>
        <h2 className="mt-2 text-3xl font-semibold text-white">Risk Radar</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-100/80">
          Anticipate friction before it compounds. Track triggers weekly and deploy mitigations to
          protect cash flow and momentum.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {risks.map((risk) => (
          <RiskCard key={risk.title} risk={risk} />
        ))}
      </div>
    </section>

    <footer className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 text-center text-sm text-white/70">
      Execute aggressively for 12 weeks. Document every win, refine your prompts, and recycle assets
      across streams. Once ${monthlyGoal.toLocaleString()} is stabilized, reinvest time into SEO,
      paid amplification, or micro-SaaS experiments to compound growth.
    </footer>
  </main>
);

export default Page;
