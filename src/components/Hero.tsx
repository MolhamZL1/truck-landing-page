import { ChevronDown } from 'lucide-react';
import { appContent } from '../data/content';

export function Hero() {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-down">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/30">
              <span className="text-2xl">🚚</span>
              <span className="text-white font-semibold">{appContent.appName}</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up leading-tight">
            {appContent.hero.title}
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 animate-fade-in-up animation-delay-200 leading-relaxed">
            {appContent.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <button
              onClick={scrollToFeatures}
              className="px-8 py-4 bg-white text-emerald-700 rounded-full font-bold text-lg hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              {appContent.hero.ctaPrimary}
            </button>
            <button
              onClick={scrollToFeatures}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border-2 border-white/30"
            >
              {appContent.hero.ctaSecondary}
            </button>
          </div>

          <div className="mt-20 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/70 mx-auto cursor-pointer" onClick={scrollToFeatures} />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="truck-animation absolute top-1/2 left-0 transform -translate-y-1/2">
          <div className="text-6xl">🚛</div>
        </div>
      </div>
    </section>
  );
}
