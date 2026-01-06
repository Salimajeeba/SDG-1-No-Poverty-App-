
import React, { useState, useEffect } from 'react';
import { Language, Screen } from './types';
import { TRANSLATIONS, SCHEMES, JOBS } from './constants.tsx';
import Assistant from './components/Assistant';

// Simplified Icons
const Icon = ({ name, color = "currentColor" }: { name: string, color?: string }) => {
  switch (name) {
    case 'food': return <svg className="w-8 h-8" fill="none" stroke={color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>;
    case 'health': return <svg className="w-8 h-8" fill="none" stroke={color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>;
    case 'job': return <svg className="w-8 h-8" fill="none" stroke={color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>;
    case 'scheme': return <svg className="w-8 h-8" fill="none" stroke={color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>;
    case 'water': return <svg className="w-8 h-8" fill="none" stroke={color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>;
    case 'home': return <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>;
    case 'user': return <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>;
    default: return null;
  }
};

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('SPLASH');
  const [lang, setLang] = useState<Language>('en');
  const [showAssistant, setShowAssistant] = useState(false);

  useEffect(() => {
    if (screen === 'SPLASH') {
      const timer = setTimeout(() => setScreen('LOGIN'), 2500);
      return () => clearTimeout(timer);
    }
  }, [screen]);

  const renderScreen = () => {
    switch (screen) {
      case 'SPLASH':
        return (
          <div className="flex-1 flex flex-col items-center justify-center bg-orange-600 text-white p-6 text-center">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl animate-bounce">
              <span className="text-orange-600 text-5xl font-bold">U</span>
            </div>
            <h1 className="text-4xl font-extrabold mb-2 tracking-tight">UPLIFT INDIA</h1>
            <p className="text-lg opacity-90">{TRANSLATIONS.slogan[lang]}</p>
          </div>
        );

      case 'LOGIN':
        return (
          <div className="flex-1 flex flex-col p-8 justify-between bg-white">
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">नमस्ते / Welcome</h2>
              <p className="text-gray-500 mb-8">Login to access welfare benefits and jobs.</p>
              
              <div className="space-y-4">
                <div className="flex gap-2 mb-6">
                  {(['en', 'hi', 'ta'] as Language[]).map(l => (
                    <button 
                      key={l}
                      onClick={() => setLang(l)}
                      className={`flex-1 py-2 rounded-lg border-2 transition-all ${lang === l ? 'border-orange-500 bg-orange-50 text-orange-700 font-bold' : 'border-gray-200 text-gray-500'}`}
                    >
                      {l === 'en' ? 'English' : l === 'hi' ? 'हिन्दी' : 'தமிழ்'}
                    </button>
                  ))}
                </div>

                <div className="border-b-2 border-gray-100 pb-2">
                  <label className="text-xs font-bold text-gray-400 uppercase">Phone Number</label>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-gray-900 font-bold">+91</span>
                    <input type="tel" placeholder="00000 00000" className="flex-1 outline-none text-lg tracking-widest" maxLength={10} />
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setScreen('HOME')}
              className="w-full bg-orange-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-orange-700 active:scale-95 transition-all"
            >
              {TRANSLATIONS.loginBtn[lang]}
            </button>
          </div>
        );

      case 'HOME':
        return (
          <div className="flex-1 overflow-y-auto bg-gray-50 pb-24">
            <header className="bg-orange-600 p-6 rounded-b-[40px] text-white shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h1 className="text-2xl font-bold">Uplift India</h1>
                  <p className="text-sm opacity-80">Welcome, Rakesh Kumar</p>
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon name="user" />
                </div>
              </div>
              <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                <p className="text-xs uppercase font-bold opacity-70 mb-1">Your Eligibility</p>
                <p className="text-sm">You are eligible for 4 new schemes</p>
              </div>
            </header>

            <main className="p-4 grid grid-cols-2 gap-4 -mt-6">
              {[
                { id: 'FOOD', title: TRANSLATIONS.food[lang], icon: 'food', color: 'bg-emerald-50 text-emerald-600' },
                { id: 'HEALTH', title: TRANSLATIONS.health[lang], icon: 'health', color: 'bg-rose-50 text-rose-600' },
                { id: 'JOBS', title: TRANSLATIONS.jobs[lang], icon: 'job', color: 'bg-sky-50 text-sky-600' },
                { id: 'SCHEMES', title: TRANSLATIONS.schemes[lang], icon: 'scheme', color: 'bg-amber-50 text-amber-600' },
                { id: 'WATER', title: TRANSLATIONS.water[lang], icon: 'water', color: 'bg-blue-50 text-blue-600' },
              ].map(item => (
                <button 
                  key={item.id}
                  onClick={() => setScreen(item.id as Screen)}
                  className={`${item.color} p-6 rounded-3xl flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-all active:scale-95 border border-white`}
                >
                  <Icon name={item.icon} color="currentColor" />
                  <span className="mt-3 font-bold text-sm text-center">{item.title}</span>
                </button>
              ))}
            </main>

            <section className="p-4 mt-4">
              <h3 className="font-bold text-gray-800 mb-3 px-2">Local Announcements</h3>
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-orange-100 rounded-xl text-orange-600">📢</div>
                <div>
                  <p className="font-bold text-sm">Vaccination Camp Nearby</p>
                  <p className="text-xs text-gray-500">Government School, Sector 4. Starts at 10 AM tomorrow.</p>
                </div>
              </div>
            </section>
          </div>
        );

      case 'SCHEMES':
        return (
          <div className="flex-1 bg-white overflow-y-auto pb-24">
            <div className="p-6 bg-amber-500 text-white">
               <button onClick={() => setScreen('HOME')} className="mb-4 text-sm font-bold opacity-80">← Back</button>
               <h2 className="text-2xl font-bold">{TRANSLATIONS.schemes[lang]}</h2>
            </div>
            <div className="p-4 space-y-4">
              {SCHEMES.map(s => (
                <div key={s.id} className="p-5 border-2 border-amber-100 rounded-3xl hover:bg-amber-50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100 px-2 py-1 rounded-md">{s.category}</span>
                    <button className="text-blue-600 text-xs font-bold">Apply Now ↗</button>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{s.title[lang]}</h3>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.description[lang]}</p>
                  <div className="bg-white/50 p-2 rounded-lg border border-amber-50">
                    <p className="text-xs font-bold text-amber-800 italic">Eligibility: {s.eligibility[lang]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'JOBS':
        return (
          <div className="flex-1 bg-white overflow-y-auto pb-24">
            <div className="p-6 bg-sky-500 text-white">
               <button onClick={() => setScreen('HOME')} className="mb-4 text-sm font-bold opacity-80">← Back</button>
               <h2 className="text-2xl font-bold">{TRANSLATIONS.jobs[lang]}</h2>
            </div>
            <div className="p-4 space-y-4">
              {JOBS.map(j => (
                <div key={j.id} className="p-5 border-2 border-sky-100 rounded-3xl hover:bg-sky-50 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-lg">{j.title[lang]}</h3>
                    <p className="text-sm text-gray-500">{j.location[lang]}</p>
                    <div className="flex gap-2 mt-2">
                      <span className="text-xs font-bold bg-sky-100 text-sky-700 px-2 py-1 rounded-full">{j.type}</span>
                      <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full">{j.pay[lang]}</span>
                    </div>
                  </div>
                  <button className="bg-sky-600 text-white p-3 rounded-full h-12 w-12 flex items-center justify-center font-bold">📞</button>
                </div>
              ))}
              <div className="p-6 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 text-center">
                <p className="text-gray-400 font-medium">Want to learn a new skill?</p>
                <button className="mt-2 text-sky-600 font-bold">View Free Courses</button>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="flex-1 flex items-center justify-center p-8 text-center bg-gray-50">
            <div>
              <h2 className="text-xl font-bold mb-2">Section Coming Soon</h2>
              <p className="text-gray-500 mb-6">We are working on bringing these resources to your community.</p>
              <button onClick={() => setScreen('HOME')} className="bg-orange-600 text-white px-6 py-2 rounded-full font-bold">Go Home</button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="app-container overflow-hidden">
      {renderScreen()}

      {screen !== 'SPLASH' && screen !== 'LOGIN' && (
        <>
          {/* Floating Assistant Trigger */}
          <button 
            onClick={() => setShowAssistant(true)}
            className="fixed bottom-24 right-6 w-16 h-16 bg-orange-600 text-white rounded-full shadow-2xl flex flex-col items-center justify-center animate-pulse border-4 border-white z-40"
          >
            <span className="text-xs font-bold leading-tight">AI</span>
            <span className="text-[10px] leading-tight">Sahayak</span>
          </button>

          {/* Bottom Navigation */}
          <nav className="absolute bottom-0 left-0 right-0 bg-white border-t p-2 flex justify-around items-center h-20 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
            <button onClick={() => setScreen('HOME')} className={`flex flex-col items-center p-2 transition-colors ${screen === 'HOME' ? 'text-orange-600' : 'text-gray-400'}`}>
              <Icon name="home" />
              <span className="text-[10px] font-bold mt-1">{TRANSLATIONS.home[lang]}</span>
            </button>
            <button onClick={() => setScreen('SCHEMES')} className={`flex flex-col items-center p-2 transition-colors ${screen === 'SCHEMES' ? 'text-orange-600' : 'text-gray-400'}`}>
              <Icon name="scheme" />
              <span className="text-[10px] font-bold mt-1">{TRANSLATIONS.schemes[lang]}</span>
            </button>
            <button onClick={() => setScreen('JOBS')} className={`flex flex-col items-center p-2 transition-colors ${screen === 'JOBS' ? 'text-orange-600' : 'text-gray-400'}`}>
              <Icon name="job" />
              <span className="text-[10px] font-bold mt-1">{TRANSLATIONS.jobs[lang]}</span>
            </button>
            <button className="flex flex-col items-center p-2 text-gray-400">
              <Icon name="user" />
              <span className="text-[10px] font-bold mt-1">Profile</span>
            </button>
          </nav>
        </>
      )}

      {showAssistant && (
        <Assistant 
          language={lang} 
          onClose={() => setShowAssistant(false)} 
        />
      )}

      {/* Tailwind Animations */}
      <style>{`
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default App;
