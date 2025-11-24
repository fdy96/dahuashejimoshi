import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { SectionHeader, NarrativeText, ChatBubble, CodeBlock, StoryCard, QuoteBlock, ImageBlock } from './components/StoryComponents';
import { chapterData } from './data';
import { ContentType } from './types';

function App() {
  const [activeSection, setActiveSection] = useState<string>("");

  // Set initial active section
  useEffect(() => {
    if (chapterData.length > 0 && chapterData[0].sections.length > 0) {
      setActiveSection(chapterData[0].sections[0].id);
    }
  }, []);

  // Smooth scroll handler
  const handleNavigate = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Intersection Observer to update active section in sidebar during scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-10% 0px -50% 0px" }
    );

    chapterData.forEach(chapter => {
      chapter.sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.observe(element);
      });
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Layout 
      activeSection={activeSection} 
      chapters={chapterData}
      onNavigate={handleNavigate}
    >
      <div className="space-y-32 pb-32">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-500 dark:to-purple-500 mb-6 drop-shadow-sm">
             大话设计模式
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-light max-w-2xl mx-auto">
            交互式学习体验
          </p>
        </header>

        {chapterData.map((chapter) => (
          <div key={chapter.id} className="relative">
            <div className="mb-12 border-b-2 border-indigo-100 dark:border-indigo-900/30 pb-4">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{chapter.title}</h2>
              <p className="text-slate-500 dark:text-slate-400">{chapter.description}</p>
            </div>

            {chapter.sections.map((section, sectionIdx) => (
              <section key={section.id} className="relative mb-24">
                {/* Decorative line connecting sections within a chapter */}
                {sectionIdx !== chapter.sections.length - 1 && (
                    <div className="absolute left-8 md:left-0 top-full h-24 w-px bg-gradient-to-b from-indigo-500/50 to-transparent -ml-[0.5px]"></div>
                )}

                <SectionHeader title={section.title} id={section.id} />
                
                <div className="space-y-6">
                  {section.content.map((item, idx) => {
                    const prevItem = section.content[idx - 1];
                    const isContinued = 
                      item.type === ContentType.DIALOGUE && 
                      prevItem?.type === ContentType.DIALOGUE && 
                      item.dialogue?.speaker === prevItem.dialogue?.speaker;

                    switch (item.type) {
                      case ContentType.NARRATIVE:
                        return <NarrativeText key={idx} text={item.text || ''} />;
                      case ContentType.DIALOGUE:
                        return item.dialogue && <ChatBubble key={idx} dialogue={item.dialogue} isContinued={isContinued} />;
                      case ContentType.CODE:
                        return <CodeBlock key={idx} code={item.code || ''} language={item.language} />;
                      case ContentType.QUOTE:
                        return <QuoteBlock key={idx} text={item.text || ''} />;
                      case ContentType.STORY_CARD:
                        return <StoryCard key={idx} title={item.title || ''} text={item.text || ''} />;
                      case ContentType.IMAGE:
                        return item.imageUrl && <ImageBlock key={idx} src={item.imageUrl} caption={item.caption} />;
                      default:
                        return null;
                    }
                  })}
                </div>
              </section>
            ))}
          </div>
        ))}

        <footer className="mt-32 pt-16 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 dark:text-slate-600">
          <p className="mb-4">使用 React & Tailwind 设计</p>
          <p className="text-sm">内容改编自程杰著作《大话设计模式》</p>
        </footer>
      </div>
    </Layout>
  );
}

export default App;