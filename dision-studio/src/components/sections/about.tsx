import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { aboutContent } from "@/config/site";

export type AboutProps = {
  title?: string;
  description?: string;
  image?: string;
  highlights?: { title: string; description: string }[];
};

export function About({
  title = aboutContent.title,
  description = aboutContent.description,
  image = aboutContent.image,
  highlights = aboutContent.highlights,
}: AboutProps) {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <FadeIn direction="up">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {description}
            </p>

            <div className="mt-8 space-y-4">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
