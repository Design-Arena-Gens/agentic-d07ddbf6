import type { IncomeStream } from '@/data/plan';

type IncomeStreamCardProps = {
  stream: IncomeStream;
};

const IncomeStreamCard = ({ stream }: IncomeStreamCardProps) => (
  <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/50 backdrop-blur">
    <header className="flex flex-col gap-2 border-b border-white/10 pb-4">
      <h3 className="text-xl font-semibold text-white">{stream.name}</h3>
      <p className="text-sm text-white/60">
        Target: <span className="font-medium text-emerald-300">${stream.targetMonthly.toLocaleString()}</span> /
        month
      </p>
      <p className="text-sm text-slate-100/80">{stream.description}</p>
    </header>
    <section className="mt-4 space-y-3">
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50">Execution Plan</h4>
        <ul className="mt-2 space-y-2 text-sm text-slate-100/80">
          {stream.actions.map((action) => (
            <li key={action} className="flex gap-2">
              <span className="mt-1 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/80" />
              <span>{action}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50">AI Assist Stack</h4>
        <ul className="mt-2 space-y-2 text-sm text-slate-100/80">
          {stream.aiAssist.map((tool) => (
            <li key={tool} className="flex gap-2">
              <span className="mt-1 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/70" />
              <span>{tool}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm text-emerald-100">
        <h4 className="text-xs font-semibold uppercase tracking-widest text-emerald-200">Validation Path</h4>
        <p className="mt-2 leading-relaxed">{stream.validation}</p>
      </div>
    </section>
  </article>
);

export default IncomeStreamCard;
