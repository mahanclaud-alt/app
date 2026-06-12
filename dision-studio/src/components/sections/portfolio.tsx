import Image from "next/image";

import { FadeIn } from "@/components/motion/fade-in";
import { portfolioItems, type PortfolioItem } from "@/config/site";

export type PortfolioProps = {
  title?: string;
  subtitle?: string;
  items?: PortfolioItem[];
};

export function Portfolio({
  title = "نمونه‌کارها",
  subtitle = "گزیده‌ای از پروژه‌هایی که با افتخار انجام داده‌ایم",
  items = portfolioItems,
}: PortfolioProps) {
  return (
    <section id="portfolio" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{subtitle}</p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map((item, index) => {
            const content = (
              <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="inline-flex rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                    {item.category}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            );

            return (
              <FadeIn key={item.id} delay={index * 0.1}>
                {item.href ? (
                  <a href={item.href} className="block">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
