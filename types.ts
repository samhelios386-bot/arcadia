import { ReactNode } from 'react';

export interface Role {
  cn: string;
  en: string;
}

export interface Idea {
  title: string;
  content: string;
  author: string;
  icon: ReactNode | null;
  isSpecial?: boolean;
}

export interface ManifestoItem {
  id: string;
  title: string;
  desc: string;
  meta: string;
}