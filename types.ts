
export enum GameState {
  MENU = 'MENU',
  BATTLE = 'BATTLE',
  PAUSED = 'PAUSED',
  VICTORY = 'VICTORY',
  DEFEAT = 'DEFEAT'
}

export interface Skill {
  id: string;
  name: string;
  damage: number;
  cost: number; // SP consumption (Breath)
  cooldown: number; // in milliseconds
  description: string;
  icon: string;
  animationColor: string;
}

export interface Character {
  id: string;
  name: string;
  maxHp: number;
  maxSp: number; // Max Breath
  spRecovery: number; // Amount recovered per breath action
  color: string;
  accentColor: string;
  icon: string;
  description: string;
  skills: Skill[];
}

export interface Enemy {
  id: string;
  name: string;
  maxHp: number;
  color: string;
  icon: string;
  skills: Skill[]; // Enemy uses these randomly
}

export interface StoryLine {
  speaker: string;
  text: string;
}

export interface StorySegment {
  title: string;
  lines: StoryLine[];
}
