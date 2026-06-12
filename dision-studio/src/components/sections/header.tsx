"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig, navLinks } from "@/config/site";

export type HeaderProps = {
  brandName?: string;
  links?: typeof navLinks;
  ctaLabel?: string;
  ctaHref?: string;
};

export function Header({
  brandName = siteConfig.shortName,
  links = navLinks,
  ctaLabel = "تماس با ما",
  ctaHref = "#contact",
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="text-xl font-bold text-blue-600">
          {brandName}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="باز یا بسته کردن منو"
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <div
        className={cn(
          "border-t border-slate-200 bg-white md:hidden",
          isOpen ? "block" : "hidden"
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="mt-2">
            <a href={ctaHref} onClick={() => setIsOpen(false)}>
              {ctaLabel}
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
