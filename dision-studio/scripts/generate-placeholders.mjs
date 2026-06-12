import { writeFileSync } from "fs";
import { join } from "path";

const outDir = join(process.cwd(), "public", "images");

function svg(label, w, h, bg, fg) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="${bg}" />
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="${Math.round(
    Math.min(w, h) / 8
  )}" fill="${fg}">${label}</text>
</svg>`;
}

const files = {
  "about.svg": svg("درباره ما", 800, 600, "#dbeafe", "#2563eb"),
  "portfolio-1.svg": svg("نمونه‌کار ۱", 800, 600, "#e2e8f0", "#2563eb"),
  "portfolio-2.svg": svg("نمونه‌کار ۲", 800, 600, "#dbeafe", "#1e3a8a"),
  "portfolio-3.svg": svg("نمونه‌کار ۳", 800, 600, "#e2e8f0", "#2563eb"),
  "portfolio-4.svg": svg("نمونه‌کار ۴", 800, 600, "#dbeafe", "#1e3a8a"),
  "avatar-1.svg": svg("ع.م", 200, 200, "#2563eb", "#ffffff"),
  "avatar-2.svg": svg("س.ا", 200, 200, "#1e3a8a", "#ffffff"),
  "avatar-3.svg": svg("ر.ک", 200, 200, "#3b82f6", "#ffffff"),
};

for (const [name, content] of Object.entries(files)) {
  writeFileSync(join(outDir, name), content);
}

console.log("Generated placeholders:", Object.keys(files).join(", "));
