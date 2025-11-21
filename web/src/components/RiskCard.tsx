import type { Risk } from '@/data/plan';

type RiskCardProps = {
  risk: Risk;
};

const RiskCard = ({ risk }: RiskCardProps) => (
  <div className="rounded-2xl border border-rose-400/30 bg-rose-500/10 p-5 text-rose-100 shadow-lg shadow-rose-950/40">
    <h3 className="text-lg font-semibold text-white">{risk.title}</h3>
    <dl className="mt-3 space-y-2 text-sm">
      <div>
        <dt className="font-semibold uppercase tracking-widest text-rose-200/80">Trigger</dt>
        <dd className="text-rose-50/90">{risk.trigger}</dd>
      </div>
      <div>
        <dt className="font-semibold uppercase tracking-widest text-rose-200/80">Mitigation</dt>
        <dd className="text-rose-50/90">{risk.mitigation}</dd>
      </div>
    </dl>
  </div>
);

export default RiskCard;
