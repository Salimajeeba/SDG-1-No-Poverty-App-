
import React, { useState, useEffect, useRef } from 'react';
import { getAssistantResponse } from '../services/geminiService';
import { Language, Screen } from '../types';
import { TRANSLATIONS } from '../constants.tsx';

interface AssistantProps {
  language: Language;
  onClose: () => void;
}

const Assistant: React.FC<AssistantProps> = ({ language, onClose }) => {
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: TRANSLATIONS.assistant[language] + ". How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
    setInput('');
    setLoading(true);

    const response = await getAssistantResponse(userMsg, language);
    setMessages(prev => [...prev, { text: response, isBot: true }]);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-end justify-center">
      <div className="bg-white w-full max-w-[480px] rounded-t-3xl h-[80vh] flex flex-col animate-slide-up">
        <div className="p-4 border-b flex justify-between items-center bg-orange-50 rounded-t-3xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
              S
            </div>
            <div>
              <h3 className="font-bold text-orange-900">{TRANSLATIONS.assistant[language]}</h3>
              <p className="text-xs text-orange-700">Online | AI Helper</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-gray-500 text-2xl">&times;</button>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.isBot ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-[80%] p-3 rounded-2xl ${
                m.isBot ? 'bg-gray-100 text-gray-800 rounded-tl-none' : 'bg-orange-600 text-white rounded-tr-none'
              }`}>
                {m.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 p-3 rounded-2xl animate-pulse">Thinking...</div>
            </div>
          )}
        </div>

        <div className="p-4 border-t pb-8">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your question..."
              className="flex-1 p-3 border rounded-full outline-none focus:border-orange-500"
            />
            <button
              onClick={handleSend}
              className="bg-orange-600 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center"
            >
              ➔
            </button>
          </div>
          <div className="flex gap-2 mt-3 overflow-x-auto no-scrollbar">
            {['PM-Kisan details', 'Find jobs', 'Nearby Hospital'].map((chip) => (
              <button
                key={chip}
                onClick={() => setInput(chip)}
                className="whitespace-nowrap bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs border border-orange-200"
              >
                {chip}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assistant;
