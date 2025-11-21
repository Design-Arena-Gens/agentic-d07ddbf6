import type { DailyRhythm } from '@/data/plan';

type DailyRhythmCardProps = {
  slot: DailyRhythm;
};

const DailyRhythmCard = ({ slot }: DailyRhythmCardProps) => (
  <div className="rounded-2xl border border-white/10 bg-black/40 p-4 shadow shadow-black/50">
    <p className="text-xs uppercase tracking-[0.35em] text-white/60">{slot.block}</p>
    <h3 className="mt-2 text-base font-semibold text-white">{slot.focus}</h3>
    <p className="mt-3 text-sm text-slate-100/80">
      <span className="font-semibold text-white/70">AI Stack:</span> {slot.tooling}
    </p>
  </div>
);

export default DailyRhythmCard;
