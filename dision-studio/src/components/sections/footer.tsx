import { siteConfig, footerContent } from "@/config/site";

export type FooterProps = {
  brandName?: string;
  description?: string;
  columns?: typeof footerContent.columns;
  socials?: typeof footerContent.socials;
  copyright?: string;
};

export function Footer({
  brandName = siteConfig.shortName,
  description = footerContent.description,
  columns = footerContent.columns,
  socials = footerContent.socials,
  copyright = footerContent.copyright,
}: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="text-xl font-bold text-blue-600">{brandName}</div>
            <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">
              {description}
            </p>
            <div className="mt-4 flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-slate-500 hover:text-blue-600"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-slate-900">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-blue-600"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          {copyright}
        </div>
      </div>
    </footer>
  );
}
