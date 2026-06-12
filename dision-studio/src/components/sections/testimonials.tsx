import Image from "next/image";
import { Quote } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { testimonials, type Testimonial } from "@/config/site";

export type TestimonialsProps = {
  title?: string;
  subtitle?: string;
  items?: Testimonial[];
};

export function Testimonials({
  title = "نظرات مشتریان",
  subtitle = "تجربه‌ای که مشتریان ما از همکاری با دیژن استودیو داشته‌اند",
  items = testimonials,
}: TestimonialsProps) {
  return (
    <section id="testimonials" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{subtitle}</p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <Quote className="size-8 text-blue-200" />
                  <p className="mt-4 text-slate-700 leading-7">
                    {item.quote}
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="relative size-11 overflow-hidden rounded-full bg-slate-200">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="44px"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">
                        {item.name}
                      </div>
                      <div className="text-sm text-slate-500">
                        {item.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
