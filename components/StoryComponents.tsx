import React, { useState } from 'react';
import { Terminal, Copy, Check, Lightbulb, Quote, User, Heart } from 'lucide-react';
import { DialogueItem } from '../types';

// Helper for HTML escaping
const escapeHtml = (str: string) => {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
};

// Robust syntax highlighting that protects HTML tags and strings
const highlightCode = (code: string) => {
  const placeholders: string[] = [];
  const addPlaceholder = (html: string) => {
    placeholders.push(html);
    return `___PH${placeholders.length - 1}___`;
  };

  // 1. Tokenize: Extract Strings and Comments first to protect them
  let processed = code.replace(/("(?:[^"\\]|\\.)*")|(\/\/.*$)/gm, (match, str, comment) => {
    if (comment) {
      return addPlaceholder(`<span class="text-slate-500 italic">${escapeHtml(comment)}</span>`);
    } else if (str) {
      return addPlaceholder(`<span class="text-emerald-400">${escapeHtml(str)}</span>`);
    }
    return match;
  });

  // 2. Escape the remaining code
  processed = escapeHtml(processed);

  // 3. Highlight Numbers
  processed = processed.replace(/\b\d+(\.\d+)?([dDfFlL])?\b/g, (match) => {
    return `<span class="text-blue-300">${match}</span>`;
  });

  // 4. Highlight Keywords
  const keywords = [
    'public', 'class', 'static', 'void', 'double', 'int', 'boolean', 'char', 'float',
    'String', 'new', 'return', 'import', 'if', 'else', 'switch', 'case', 'break', 
    'default', 'try', 'catch', 'finally', 'extends', 'abstract', 'throw', 'throws', 
    'implements', 'interface', 'package'
  ];
  const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
  processed = processed.replace(keywordRegex, '<span class="text-pink-400 font-bold">$1</span>');

  // 5. Highlight Likely Class Names
  processed = processed.replace(/\b[A-Z][a-zA-Z0-9_]*\b/g, (match) => {
    if (keywords.includes(match)) return match;
    if (match.startsWith('___PH')) return match; 
    return `<span class="text-amber-300">${match}</span>`;
  });

  // 6. Restore Placeholders
  placeholders.forEach((html, index) => {
    processed = processed.split(`___PH${index}___`).join(html);
  });

  return processed;
};

export const CodeBlock: React.FC<{ code: string; language?: string }> = ({ code, language = 'java' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700/50 shadow-xl dark:shadow-2xl bg-[#0d1117] group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 pointer-events-none"></div>
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800/50 border-b border-slate-700/50 backdrop-blur-sm relative z-10">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
          </div>
          <span className="ml-3 text-xs font-mono text-slate-400 uppercase tracking-wider">{language}</span>
        </div>
        <button 
          onClick={handleCopy} 
          className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-white/5 text-slate-400 hover:text-white transition-all"
        >
          {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
          <span className="text-xs">{copied ? '已复制!' : '复制'}</span>
        </button>
      </div>
      <div className="p-4 overflow-x-auto relative z-10">
        <pre className="font-mono text-sm leading-relaxed text-slate-300">
          <code dangerouslySetInnerHTML={{ __html: highlightCode(code) }} />
        </pre>
      </div>
    </div>
  );
};

export const ChatBubble: React.FC<{ dialogue: DialogueItem; isContinued?: boolean }> = ({ dialogue, isContinued = false }) => {
  const isXiaoCai = dialogue.speaker === 'Xiao Cai';
  const isDaNiao = dialogue.speaker === 'Da Niao';
  const isJiaojiao = dialogue.speaker === 'Jiaojiao';

  // Helper to render text with Markdown-style bold support
  const renderText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <span key={index} className={`font-bold mx-0.5 tracking-wide ${
            isXiaoCai 
              ? 'text-indigo-700 dark:text-indigo-300 bg-indigo-100/80 dark:bg-indigo-500/20 px-1.5 py-0.5 rounded border border-indigo-200/50 dark:border-indigo-500/30' 
              : isDaNiao
                ? 'text-amber-200 bg-white/10 px-1.5 py-0.5 rounded border border-white/10 shadow-[0_0_15px_rgba(251,191,36,0.15)]'
                : 'text-white bg-white/20 px-1.5 py-0.5 rounded border border-white/20'
          }`}>
            {part.slice(2, -2)}
          </span>
        );
      }
      return part;
    });
  };
  
  return (
    <div className={`flex w-full ${isContinued ? 'mt-2' : 'mt-8'} ${isXiaoCai ? 'justify-start' : 'justify-end'}`}>
      <div className={`flex max-w-[90%] md:max-w-[80%] gap-4 ${isXiaoCai ? 'flex-row' : 'flex-row-reverse'}`}>
        
        {/* Avatar Area */}
        <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center`}>
          {!isContinued && (
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transform transition-transform hover:scale-105 ${
              isXiaoCai 
                ? 'bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 ring-2 ring-blue-500/30' 
                : isDaNiao
                  ? 'bg-gradient-to-br from-emerald-400 to-teal-500 dark:from-emerald-500 dark:to-teal-600 ring-2 ring-emerald-500/30'
                  : 'bg-gradient-to-br from-pink-500 to-rose-500 dark:from-pink-600 dark:to-rose-700 ring-2 ring-pink-500/30'
            }`}>
              {isXiaoCai && <User size={24} className="text-white" />}
              {isDaNiao && <Terminal size={24} className="text-white" />}
              {isJiaojiao && <Heart size={20} className="text-white" />}
            </div>
          )}
        </div>
        
        <div className={`flex flex-col ${isXiaoCai ? 'items-start' : 'items-end'}`}>
          {!isContinued && (
            <span className="text-xs font-bold text-slate-500 mb-1.5 px-1 uppercase tracking-wider">
              {isXiaoCai ? '小菜' : (isDaNiao ? '大鸟' : '娇娇')}
            </span>
          )}
          <div className={`relative p-5 rounded-2xl shadow-xl transition-colors duration-300 text-sm md:text-base leading-relaxed border ${
            isXiaoCai 
              ? 'bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 rounded-tl-none border-slate-100 dark:border-slate-700/50 shadow-slate-200/50 dark:shadow-blue-900/10' 
              : isDaNiao
                ? 'bg-indigo-600 dark:bg-indigo-600/90 backdrop-blur text-white rounded-tr-none border-indigo-500 dark:border-indigo-500/50 shadow-indigo-500/20 dark:shadow-indigo-900/20'
                : 'bg-pink-500 dark:bg-pink-600/90 backdrop-blur text-white rounded-tr-none border-pink-500 dark:border-pink-500/50 shadow-pink-500/20 dark:shadow-pink-900/20'
          }`}>
            {dialogue.text.split('\n').map((paragraph, idx) => (
              paragraph.trim() && (
                <p key={idx} className={idx > 0 ? "mt-3" : ""}>
                  {renderText(paragraph)}
                </p>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const StoryCard: React.FC<{ title: string; text: string }> = ({ title, text }) => {
  return (
    <div className="my-12 relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl blur opacity-10 dark:opacity-20 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-500"></div>
      <div className="relative rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border border-amber-200 dark:border-amber-500/30 p-1 shadow-xl">
        <div className="bg-white dark:bg-[#0f1115] rounded-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Quote size={140} className="text-amber-500 transform rotate-12" />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-400 dark:to-orange-400 mb-6 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <Lightbulb size={24} className="text-amber-500 dark:text-amber-400" />
              </div>
              {title}
            </h3>
            
            <div className="space-y-4">
              {text.split('\n\n').map((p, idx) => (
                <p key={idx} className="text-lg font-serif text-slate-600 dark:text-slate-300 leading-relaxed italic border-l-2 border-amber-500/30 pl-4">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SectionHeader: React.FC<{ title: string; id: string }> = ({ title, id }) => {
  return (
    <div id={id} className="scroll-mt-32 mb-10 pt-10 border-t border-slate-200 dark:border-slate-800/50">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-8 w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
        <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
          {title}
        </h2>
      </div>
    </div>
  );
};

export const NarrativeText: React.FC<{ text: string }> = ({ text }) => {
  const paragraphs = text.split('\n');
  return (
    <div className="space-y-4 mb-6">
      {paragraphs.map((paragraph, pIdx) => {
        if (!paragraph.trim()) return null;
        
        const parts = paragraph.split(/(\*\*.*?\*\*)/g);
        return (
          <p key={pIdx} className="text-slate-700 dark:text-slate-300 text-base md:text-lg leading-7 font-light max-w-prose">
            {parts.map((part, index) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return (
                  <span key={index} className="font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-500/10 px-1 py-0.5 rounded border border-indigo-200 dark:border-indigo-500/20">
                    {part.slice(2, -2)}
                  </span>
                );
              }
              return part;
            })}
          </p>
        );
      })}
    </div>
  );
};

export const QuoteBlock: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="border-l-4 border-indigo-500 pl-6 py-4 my-8 italic text-slate-600 dark:text-slate-400 bg-indigo-50 dark:bg-indigo-500/5 rounded-r-lg">
       {text.split('\n').map((line, idx) => (
         <p key={idx} className={idx > 0 ? "mt-2" : ""}>{line}</p>
       ))}
    </div>
  );
};

export const ImageBlock: React.FC<{ src: string; caption?: string }> = ({ src, caption }) => {
  return (
    <div className="my-8 flex flex-col items-center">
      <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700/50 group bg-white dark:bg-slate-900/50">
         <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
        <img 
          src={src} 
          alt={caption || "插图"} 
          className="max-w-full h-auto max-h-[500px] object-contain transform transition-transform duration-700 group-hover:scale-[1.02]" 
          loading="lazy"
        />
      </div>
      {caption && <p className="text-center text-sm text-slate-500 mt-3 font-mono">{caption}</p>}
    </div>
  );
};