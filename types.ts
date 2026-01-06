
export type Language = 'en' | 'hi' | 'ta';

export interface Scheme {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  category: 'Food' | 'Money' | 'Health' | 'Job' | 'Water';
  eligibility: Record<Language, string>;
  link: string;
}

export interface Job {
  id: string;
  title: Record<Language, string>;
  location: Record<Language, string>;
  pay: Record<Language, string>;
  type: 'Daily' | 'Contract' | 'Full-time';
}

export interface Resource {
  id: string;
  name: Record<Language, string>;
  type: 'Hospital' | 'Ration Shop' | 'Water Point' | 'Employment Exchange';
  distance: string;
  phone: string;
}

export type Screen = 'SPLASH' | 'LOGIN' | 'HOME' | 'FOOD' | 'HEALTH' | 'JOBS' | 'SCHEMES' | 'PROFILE';
