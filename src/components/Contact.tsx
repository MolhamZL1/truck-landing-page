import { MessageCircle, Mail, Twitter, Instagram, Facebook } from 'lucide-react';
import { appContent } from '../data/content';

export function Contact() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            {appContent.contact.title}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href={`https://wa.me/${appContent.contact.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-2xl text-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <MessageCircle className="w-7 h-7" />
              </div>
              <div className="text-right">
                <div className="text-sm opacity-90">تواصل معنا عبر</div>
                <div className="text-xl font-bold">واتساب</div>
                <div className="text-sm opacity-80">{appContent.contact.whatsapp}</div>
              </div>
            </a>

            <a
              href={`mailto:${appContent.contact.email}`}
              className="group flex items-center gap-4 bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl text-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Mail className="w-7 h-7" />
              </div>
              <div className="text-right">
                <div className="text-sm opacity-90">راسلنا على</div>
                <div className="text-xl font-bold">البريد الإلكتروني</div>
                <div className="text-sm opacity-80">{appContent.contact.email}</div>
              </div>
            </a>
          </div>

          <div className="text-center">
            <p className="text-slate-600 mb-6 text-lg">تابعنا على وسائل التواصل الاجتماعي</p>
            <div className="flex gap-4 justify-center">
              <a
                href={appContent.contact.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-br from-sky-400 to-sky-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href={appContent.contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href={appContent.contact.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
