
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

const AIBlessing: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const generateBlessing = async () => {
    if (!prompt) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `I want to write a wedding blessing or message for a couple named Pranesh and Shreeja. My relationship to them is ${prompt}. Please write a heartfelt, unique, and poetic wedding wish in about 50-80 words.`,
        config: {
            temperature: 0.8,
            topP: 0.95,
        }
      });
      setResult(response.text || "May your journey together be filled with infinite love and joy.");
    } catch (error) {
      console.error(error);
      setResult("Wishing Pranesh and Shreeja a lifetime of love and happiness together!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 max-w-2xl mx-auto text-left">
      <div className="mb-8">
        <label className="block text-xs uppercase tracking-widest text-gray-400 mb-3">How do you know the couple?</label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g. A childhood friend of Pranesh, Shreeja's favorite cousin..."
          className="w-full border border-gray-100 bg-gray-50 rounded-lg p-4 focus:ring-1 focus:ring-[#d4af37] outline-none transition-all h-24"
        />
      </div>
      
      <button
        onClick={generateBlessing}
        disabled={loading || !prompt}
        className="w-full bg-[#d4af37] text-white py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 mb-8"
      >
        {loading ? 'Crafting your message...' : 'Inspire a Blessing'}
      </button>

      {result && (
        <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-[#d4af37] animate-in fade-in duration-500">
          <p className="text-gray-700 italic leading-relaxed text-lg font-cursive">"{result}"</p>
          <div className="mt-4 flex justify-end">
            <button 
              onClick={() => {
                navigator.clipboard.writeText(result);
                alert("Copied to clipboard!");
              }}
              className="text-[10px] uppercase tracking-widest text-[#d4af37] hover:underline"
            >
              Copy Message
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIBlessing;
