
import React, { useState } from 'react';

const RSVP: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-[#f0f9f0] p-12 rounded-lg text-center border border-green-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl">✓</div>
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-gray-600">Your RSVP has been received. We can't wait to see you there!</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-100 p-8 md:p-12 shadow-sm rounded-xl">
      <h3 className="text-2xl font-bold mb-6">Will You Join Us?</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
          <input 
            required
            type="text" 
            className="w-full border-b border-gray-200 py-2 focus:border-[#d4af37] outline-none transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
          <input 
            required
            type="email" 
            className="w-full border-b border-gray-200 py-2 focus:border-[#d4af37] outline-none transition-colors"
            placeholder="hello@example.com"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Attendance</label>
          <div className="flex space-x-6 mt-2">
            <label className="flex items-center space-x-2 cursor-pointer group">
              <input type="radio" name="attending" value="yes" className="accent-[#d4af37]" defaultChecked />
              <span className="text-sm text-gray-600 group-hover:text-black">Joyfully Accept</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer group">
              <input type="radio" name="attending" value="no" className="accent-[#d4af37]" />
              <span className="text-sm text-gray-600 group-hover:text-black">Regretfully Decline</span>
            </label>
          </div>
        </div>
        <button 
          disabled={status === 'sending'}
          className="w-full bg-gray-900 text-white text-sm uppercase tracking-widest py-4 rounded hover:bg-[#d4af37] transition-all disabled:opacity-50"
        >
          {status === 'sending' ? 'Sending...' : 'Confirm Attendance'}
        </button>
      </form>
    </div>
  );
};

export default RSVP;
