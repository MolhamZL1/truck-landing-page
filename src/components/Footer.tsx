import { appContent } from '../data/content';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-4xl">🚚</span>
            <span className="text-3xl font-bold">{appContent.appName}</span>
          </div>
          <p className="text-slate-400 text-lg">{appContent.tagline}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {appContent.footer.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-slate-400 hover:text-white transition-colors duration-300"
            >
              {link.text}
            </a>
          ))}
        </div>

        <div className="text-center text-slate-500 text-sm border-t border-slate-800 pt-8">
          {appContent.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
