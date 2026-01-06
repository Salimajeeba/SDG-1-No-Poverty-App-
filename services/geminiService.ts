
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAssistantResponse = async (query: string, language: 'en' | 'hi' | 'ta') => {
  const systemPrompt = `
    You are 'Sahayak', a friendly AI assistant for the Uplift India app (SDG 1 - No Poverty).
    Target Users: Rural and low-income individuals in India.
    Your Goal: Explain government schemes (like PM-KISAN, MGNREGA), suggest jobs, find nearby ration shops/hospitals, and explain eligibility in SIMPLE language.
    Constraint: Keep responses short (max 3 sentences), clear, and extremely empathetic.
    Current Language: ${language === 'en' ? 'English' : language === 'hi' ? 'Hindi (Devanagari script)' : 'Tamil'}.
    Answer ONLY in the current language.
    If the user asks about jobs, mention that the app has a dedicated 'Jobs' section.
    If the user asks about health, mention the 'Ayushman Bharat' scheme.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ parts: [{ text: query }] }],
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      },
    });

    return response.text || "I am sorry, I am having trouble connecting. Please try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Something went wrong. Please check your internet connection.";
  }
};
