export enum ContentType {
  NARRATIVE = 'NARRATIVE',
  DIALOGUE = 'DIALOGUE',
  CODE = 'CODE',
  STORY_CARD = 'STORY_CARD',
  QUOTE = 'QUOTE',
  IMAGE = 'IMAGE'
}

export interface DialogueItem {
  speaker: 'Xiao Cai' | 'Da Niao' | 'Jiaojiao';
  text: string;
}

export interface ContentItem {
  type: ContentType;
  text?: string;
  dialogue?: DialogueItem;
  code?: string;
  language?: string;
  title?: string; // For story card title
  imageUrl?: string;
  caption?: string;
}

export interface ChapterSection {
  id: string;
  title: string;
  content: ContentItem[];
}

export interface Chapter {
  id: string;
  title: string;
  description?: string;
  sections: ChapterSection[];
}