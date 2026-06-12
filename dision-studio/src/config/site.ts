// Central content configuration for the Dision Studio website.
// Edit the values below to update site content without touching component code.

export const siteConfig = {
  name: "دیژن استودیو",
  shortName: "دیژن",
  description:
    "دیژن استودیو، آژانس دیجیتال مارکتینگ متخصص در تولید محتوا، تدوین ویدیو، توسعه اپلیکیشن و وبسایت.",
  url: "https://dision.studio",
  locale: "fa_IR",
  contactEmail: "info@dision.studio",
  contactPhone: "021-12345678",
  address: "تهران، خیابان ولیعصر، برج آرمان، طبقه ۶",
};

export const navLinks = [
  { label: "خانه", href: "#hero" },
  { label: "خدمات", href: "#services" },
  { label: "درباره ما", href: "#about" },
  { label: "نمونه‌کارها", href: "#portfolio" },
  { label: "نظرات مشتریان", href: "#testimonials" },
  { label: "تماس با ما", href: "#contact" },
];

export const heroContent = {
  badge: "آژانس دیجیتال مارکتینگ",
  headline: "برند شما، روایت دیجیتال ما",
  subheadline:
    "دیژن استودیو با تیمی متخصص در تولید محتوا، تدوین ویدیو، طراحی اپلیکیشن و وبسایت، کسب‌وکار شما را در فضای دیجیتال متحول می‌کند.",
  primaryCta: { label: "شروع همکاری", href: "#contact" },
  secondaryCta: { label: "مشاهده نمونه‌کارها", href: "#portfolio" },
  stats: [
    { value: "+۱۲۰", label: "پروژه موفق" },
    { value: "+۸۰", label: "مشتری راضی" },
    { value: "۷", label: "سال تجربه" },
  ],
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "PenLine" | "Clapperboard" | "Smartphone" | "Globe";
  features: string[];
};

export const services: Service[] = [
  {
    id: "content-production",
    title: "تولید محتوا",
    description:
      "تولید محتوای خلاقانه و هدفمند برای شبکه‌های اجتماعی، وب‌سایت و کمپین‌های تبلیغاتی متناسب با هویت برند شما.",
    icon: "PenLine",
    features: ["استراتژی محتوا", "کپی‌رایتینگ", "محتوای شبکه‌های اجتماعی"],
  },
  {
    id: "video-editing",
    title: "تدوین",
    description:
      "تدوین حرفه‌ای ویدیو با کیفیت سینمایی برای تیزرهای تبلیغاتی، محتوای آموزشی و شبکه‌های اجتماعی.",
    icon: "Clapperboard",
    features: ["موشن گرافیک", "رنگ‌بندی و افکت", "تدوین ریلز و تیزر"],
  },
  {
    id: "app-development",
    title: "توسعه اپلیکیشن",
    description:
      "طراحی و توسعه اپلیکیشن‌های موبایل اندروید و iOS با تجربه کاربری روان و عملکرد پایدار.",
    icon: "Smartphone",
    features: ["طراحی UI/UX", "توسعه iOS و اندروید", "نگهداری و پشتیبانی"],
  },
  {
    id: "web-development",
    title: "توسعه وبسایت",
    description:
      "طراحی و پیاده‌سازی وب‌سایت‌های مدرن، سریع و سازگار با موبایل با تمرکز بر تجربه کاربری و سئو.",
    icon: "Globe",
    features: ["طراحی واکنش‌گرا", "بهینه‌سازی سئو", "فروشگاه آنلاین"],
  },
];

export const aboutContent = {
  title: "درباره دیژن استودیو",
  description:
    "ما تیمی از طراحان، توسعه‌دهندگان و کارشناسان بازاریابی دیجیتال هستیم که با هدف کمک به رشد کسب‌وکارهای ایرانی در فضای آنلاین فعالیت می‌کنیم. از ایده تا اجرا، در کنار شما هستیم تا برندتان را به بهترین شکل به مخاطبان معرفی کنیم.",
  image: "/images/about.svg",
  highlights: [
    { title: "تیم متخصص", description: "متخصصین حرفه‌ای در هر حوزه" },
    { title: "تعهد به کیفیت", description: "تحویل پروژه در زمان مقرر" },
    { title: "پشتیبانی مستمر", description: "همراهی پس از تحویل پروژه" },
  ],
};

export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  href?: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "project-1",
    title: "بازطراحی هویت دیجیتال برند آرمان",
    category: "تولید محتوا",
    image: "/images/portfolio-1.svg",
  },
  {
    id: "project-2",
    title: "تیزر تبلیغاتی محصول نوین",
    category: "تدوین",
    image: "/images/portfolio-2.svg",
  },
  {
    id: "project-3",
    title: "اپلیکیشن فروشگاهی پیمان",
    category: "توسعه اپلیکیشن",
    image: "/images/portfolio-3.svg",
  },
  {
    id: "project-4",
    title: "وبسایت شرکتی گروه صنعتی البرز",
    category: "توسعه وبسایت",
    image: "/images/portfolio-4.svg",
  },
];

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "علی محمدی",
    role: "مدیرعامل گروه آرمان",
    quote:
      "همکاری با دیژن استودیو تجربه‌ای بسیار حرفه‌ای بود. نتیجه کار فراتر از انتظار ما بود و تأثیر مستقیمی روی فروش ما داشت.",
    avatar: "/images/avatar-1.svg",
  },
  {
    id: "testimonial-2",
    name: "سارا احمدی",
    role: "مدیر برند فروشگاه پیمان",
    quote:
      "تیم دیژن با خلاقیت و دقت بالا، اپلیکیشن ما را طراحی و توسعه داد. ارتباط و پشتیبانی آنها واقعاً قابل تحسین است.",
    avatar: "/images/avatar-2.svg",
  },
  {
    id: "testimonial-3",
    name: "رضا کریمی",
    role: "بازاریابی دیجیتال البرز",
    quote:
      "محتوای تولید شده توسط دیژن باعث افزایش قابل توجه تعامل در شبکه‌های اجتماعی ما شد. پیشنهاد می‌کنم.",
    avatar: "/images/avatar-3.svg",
  },
];

export const contactContent = {
  title: "با ما در ارتباط باشید",
  description:
    "برای شروع همکاری یا دریافت مشاوره رایگان، فرم زیر را تکمیل کنید تا در اسرع وقت با شما تماس بگیریم.",
  formFields: {
    name: "نام و نام خانوادگی",
    email: "ایمیل",
    phone: "شماره تماس",
    message: "توضیحات پروژه",
    submit: "ارسال پیام",
  },
  info: [
    { label: "ایمیل", value: siteConfig.contactEmail },
    { label: "تلفن", value: siteConfig.contactPhone },
    { label: "آدرس", value: siteConfig.address },
  ],
};

export const footerContent = {
  description:
    "دیژن استودیو، همراه شما در مسیر رشد دیجیتال کسب‌وکار با خلاقیت و تخصص.",
  columns: [
    {
      title: "خدمات",
      links: [
        { label: "تولید محتوا", href: "#services" },
        { label: "تدوین", href: "#services" },
        { label: "توسعه اپلیکیشن", href: "#services" },
        { label: "توسعه وبسایت", href: "#services" },
      ],
    },
    {
      title: "شرکت",
      links: [
        { label: "درباره ما", href: "#about" },
        { label: "نمونه‌کارها", href: "#portfolio" },
        { label: "نظرات مشتریان", href: "#testimonials" },
        { label: "تماس با ما", href: "#contact" },
      ],
    },
  ],
  socials: [
    { label: "اینستاگرام", href: "https://instagram.com" },
    { label: "تلگرام", href: "https://telegram.org" },
    { label: "لینکدین", href: "https://linkedin.com" },
  ],
  copyright: `© ${new Date().getFullYear()} دیژن استودیو. تمامی حقوق محفوظ است.`,
};
