import { Clapperboard, Globe, PenLine, Smartphone } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { services, type Service } from "@/config/site";

const icons = {
  PenLine,
  Clapperboard,
  Smartphone,
  Globe,
} as const;

export type ServicesProps = {
  title?: string;
  subtitle?: string;
  items?: Service[];
};

export function Services({
  title = "خدمات ما",
  subtitle = "راهکارهای جامع دیجیتال مارکتینگ برای رشد کسب‌وکار شما",
  items = services,
}: ServicesProps) {
  return (
    <section id="services" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{subtitle}</p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((service, index) => {
            const Icon = icons[service.icon];

            return (
              <FadeIn key={service.id} delay={index * 0.1}>
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardHeader>
                    <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon className="size-6" />
                    </div>
                    <CardTitle className="mt-4 text-xl">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-7">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-slate-600"
                        >
                          <span className="size-1.5 rounded-full bg-blue-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
