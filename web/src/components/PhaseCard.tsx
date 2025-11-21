import { Phase } from '@/data/plan';
import { clsx } from 'clsx';

type PhaseCardProps = {
  phase: Phase;
  index: number;
};

const palette = [
  'from-blue-500/80 via-blue-400/60 to-sky-500/40',
  'from-purple-500/80 via-violet-400/60 to-fuchsia-500/40',
  'from-emerald-500/80 via-teal-400/60 to-cyan-500/40',
  'from-amber-500/80 via-orange-400/60 to-yellow-500/40',
  'from-rose-500/80 via-pink-400/60 to-red-500/40'
];

const PhaseCard = ({ phase, index }: PhaseCardProps) => (
  <section
    className={clsx(
      'rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-xl shadow-blue-950/40 backdrop-blur transition hover:-translate-y-1 hover:border-white/20',
      'relative overflow-hidden'
    )}
  >
    <div
      className={clsx(
        'pointer-events-none absolute inset-0 opacity-60 blur-3xl',
        'bg-gradient-to-br',
        palette[index % palette.length]
      )}
    />
    <div className="relative space-y-4">
      <div className="flex items-center justify-between gap-4">
        <span className="text-xs uppercase tracking-[0.3em] text-white/60">{phase.duration}</span>
        <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">
          {phase.id.replace('-', ' ').toUpperCase()}
        </span>
      </div>
      <h3 className="text-2xl font-semibold text-white">{phase.title}</h3>
      <p className="text-sm text-slate-100/80">{phase.objective}</p>
      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">Milestones</h4>
          <ul className="mt-2 space-y-2 text-sm text-slate-100/90">
            {phase.milestones.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/80" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">Weekly Focus</h4>
          <ul className="mt-2 space-y-2 text-sm text-slate-100/90">
            {phase.weeklyFocus.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/80" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="rounded-xl border border-white/10 bg-black/30 p-4">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">AI Stack</h4>
        <ul className="mt-2 grid gap-2 text-sm text-slate-100/80 sm:grid-cols-2">
          {phase.aiStack.map((tool) => (
            <li key={tool} className="flex gap-2">
              <span className="mt-1 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/80" />
              <span>{tool}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">KPIs</h4>
          <ul className="mt-2 space-y-2 text-sm text-slate-100/80">
            {phase.kpis.map((kpi) => (
              <li key={kpi} className="flex gap-2">
                <span className="mt-1 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary/80" />
                <span>{kpi}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default PhaseCard;
