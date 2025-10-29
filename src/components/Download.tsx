import { Smartphone } from 'lucide-react';
import { appContent } from '../data/content';

export function Download() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 animate-bounce-slow">
            <Smartphone className="w-12 h-12 text-white" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {appContent.download.title}
          </h2>
          <p className="text-xl text-white/90 mb-12">
            {appContent.download.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href={appContent.download.android.link}
              className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-8 py-5 rounded-2xl border-2 border-white/30 transition-all duration-300 transform hover:scale-105 min-w-[240px]"
            >
              <div className="text-5xl">📱</div>
              <div className="text-right">
                <div className="text-sm text-white/80">متوفر على</div>
                <div className="text-xl font-bold text-white">
                  {appContent.download.android.available ? 'الاندرويد' : appContent.download.android.text}
                </div>
              </div>
            </a>

            <a
              href={appContent.download.ios.link}
              className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-8 py-5 rounded-2xl border-2 border-white/30 transition-all duration-300 transform hover:scale-105 min-w-[240px]"
            >
              <div className="text-5xl">🍎</div>
              <div className="text-right">
                <div className="text-sm text-white/80">متوفر على</div>
                <div className="text-xl font-bold text-white">
                  {appContent.download.ios.available ? 'App Store' : appContent.download.ios.text}
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
