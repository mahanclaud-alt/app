import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn } from "@/components/motion/fade-in";
import { contactContent } from "@/config/site";

const infoIcons = [Mail, Phone, MapPin];

export type ContactProps = {
  title?: string;
  description?: string;
  formFields?: typeof contactContent.formFields;
  info?: typeof contactContent.info;
};

export function Contact({
  title = contactContent.title,
  description = contactContent.description,
  formFields = contactContent.formFields,
  info = contactContent.info,
}: ContactProps) {
  return (
    <section id="contact" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <FadeIn>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {description}
            </p>

            <div className="mt-8 space-y-4">
              {info.map((item, index) => {
                const Icon = infoIcons[index % infoIcons.length];
                return (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">
                        {item.label}
                      </div>
                      <div className="font-medium text-slate-900">
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">{formFields.name}</Label>
                  <Input id="name" name="name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{formFields.phone}</Label>
                  <Input id="phone" name="phone" type="tel" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{formFields.email}</Label>
                <Input id="email" name="email" type="email" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{formFields.message}</Label>
                <Textarea id="message" name="message" required />
              </div>

              <Button type="submit" size="lg" className="w-full">
                {formFields.submit}
              </Button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
