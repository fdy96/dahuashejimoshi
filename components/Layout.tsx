import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Code2, Coffee, Sun, Moon, ChevronDown, ChevronRight } from 'lucide-react';
import { Chapter } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeSection: string;
  chapters: Chapter[];
  onNavigate: (id: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeSection, chapters, onNavigate }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [expandedChapters, setExpandedChapters] = useState<string[]>(chapters.map(c => c.id));

  // Initialize theme
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) {
      setTheme(stored);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    }
  }, []);

  // Apply theme class
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };
  
  const toggleChapter = (chapterId: string) => {
    setExpandedChapters(prev => 
      prev.includes(chapterId) 
        ? prev.filter(id => id !== chapterId) 
        : [...prev, chapterId]
    );
  };

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [activeSection]);

  return (
    <div className="flex h-screen overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-black transition-colors duration-500">
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 glass-panel md:hidden">
        <div className="flex items-center space-x-2 font-bold text-indigo-600 dark:text-indigo-400">
          <BookOpen size={20} />
          <span>大话设计模式</span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-slate-600 dark:text-slate-300">
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <aside 
        className={`fixed inset-y-0 left-0 z-40 w-72 transform border-r border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl transition-all duration-300 ease-in-out md:relative md:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="hidden md:flex items-center justify-between h-20 px-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
            <h1 className="flex items-center gap-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-indigo-400 dark:to-cyan-400 truncate" title="大话设计模式">
              <Code2 className="text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
              大话设计模式
            </h1>
          </div>
          
          <div className="flex-1 overflow-y-auto py-6 px-4 space-y-4">
            {chapters.map((chapter) => (
              <div key={chapter.id} className="mb-2">
                <button 
                  onClick={() => toggleChapter(chapter.id)}
                  className="flex items-center justify-between w-full text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 hover:text-indigo-500 transition-colors px-2"
                >
                  <span>{chapter.title}</span>
                  {expandedChapters.includes(chapter.id) ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                </button>
                
                {expandedChapters.includes(chapter.id) && (
                  <div className="space-y-1">
                    {chapter.sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => onNavigate(section.id)}
                        className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 group flex items-center ${
                          activeSection === section.id 
                            ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-sm dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/20 dark:shadow-[0_0_15px_rgba(99,102,241,0.15)]' 
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0 transition-colors ${activeSection === section.id ? 'bg-indigo-500 dark:bg-indigo-400' : 'bg-slate-400 dark:bg-slate-600 group-hover:bg-slate-500 dark:group-hover:bg-slate-400'}`}></span>
                        <span className="truncate">{section.title}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="mt-8 px-4 py-4 rounded-xl bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700/50 shadow-sm dark:shadow-none">
              <div className="flex items-center gap-2 mb-2 text-amber-600 dark:text-amber-400">
                <Coffee size={18} />
                <span className="font-semibold text-sm">设计贴士</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                "封装变化点。"
              </p>
            </div>
          </div>

          <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
             <p className="text-xs text-slate-500 dark:text-slate-600">改编自《大话设计模式》</p>
             <button 
                onClick={toggleTheme} 
                className="hidden md:flex p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 transition-colors"
                title="Toggle Theme"
             >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
             </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 h-full overflow-y-auto scroll-smooth relative md:pt-0 pt-16">
        <div className="max-w-4xl mx-auto px-4 py-12 md:px-12 md:py-16">
          {children}
        </div>
      </main>
    </div>
  );
};
