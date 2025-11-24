import { Chapter } from './types';
import { chapter1Sections } from './chapter1';
import { chapter2Sections } from './chapter2';
import { chapter3Sections } from './chapter3';
import { chapter4Sections } from './chapter4';
import { chapter5Sections } from './chapter5';

export const chapterData: Chapter[] = [
  {
    id: "chapter-1",
    title: "第一章：简单工厂模式",
    description: "代码无错就是优？",
    sections: chapter1Sections
  },
  {
    id: "chapter-2",
    title: "第二章：策略模式",
    description: "商场促销",
    sections: chapter2Sections
  },
  {
    id: "chapter-3",
    title: "第三章：单一职责原则",
    description: "电子阅读器vs.手机",
    sections: chapter3Sections
  },
  {
    id: "chapter-4",
    title: "第四章：开放-封闭原则",
    description: "考研求职两不误",
    sections: chapter4Sections
  },
  {
    id: "chapter-5",
    title: "第五章：依赖倒转原则",
    description: "会修电脑不会修收音机？",
    sections: chapter5Sections
  }
];