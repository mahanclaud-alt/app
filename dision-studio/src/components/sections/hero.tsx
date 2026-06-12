import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { heroContent } from "@/config/site";

export type HeroProps = {
  badge?: string;
  headline?: string;
  subheadline?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  stats?: { value: string; label: string }[];
};

export function Hero({
  badge = heroContent.badge,
  headline = heroContent.headline,
  subheadline = heroContent.subheadline,
  primaryCta = heroContent.primaryCta,
  secondaryCta = heroContent.secondaryCta,
  stats = heroContent.stats,
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600">
              {badge}
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              {headline}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {subheadline}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <a href={primaryCta.href}>{primaryCta.label}</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={secondaryCta.href}>{secondaryCta.label}</a>
              </Button>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-extrabold text-blue-600">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 mx-auto h-80 w-[40rem] rounded-full bg-blue-100 opacity-40 blur-3xl"
      />
    </section>
  );
}
