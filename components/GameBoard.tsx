import React, { useState, useEffect } from 'react';
import { Character, Enemy, Skill } from '../types';
import { Sword, Shield, Wind, Zap } from 'lucide-react';

interface GameBoardProps {
  player: Character;
  enemy: Enemy;
  isPaused: boolean;
  onGameEnd: (isVictory: boolean) => void;
  updateStats: (hp: number, sp: number, enemyHp: number) => void;
}

type ActionType = 'IDLE' | 'ATTACK' | 'SKILL' | 'DEFEND' | 'RECOVER' | 'HURT' | 'WIN' | 'LOSE';

const GameBoard: React.FC<GameBoardProps> = ({ player, enemy, isPaused, onGameEnd, updateStats }) => {
  const [playerHp, setPlayerHp] = useState(player.maxHp);
  const [playerSp, setPlayerSp] = useState(player.maxSp);
  const [enemyHp, setEnemyHp] = useState(enemy.maxHp);
  
  const [playerAction, setPlayerAction] = useState<ActionType>('IDLE');
  const [enemyAction, setEnemyAction] = useState<ActionType>('IDLE');
  
  const [cooldowns, setCooldowns] = useState<Record<string, number>>({});
  const [isDefending, setIsDefending] = useState(false);
  const [battleLog, setBattleLog] = useState<string>('전투 개시!');
  
  const [visualEffect, setVisualEffect] = useState<string | null>(null);

  // --- Battle Logic ---

  useEffect(() => {
    updateStats(playerHp, playerSp, enemyHp);
    if (playerHp <= 0) {
      setPlayerAction('LOSE');
      setEnemyAction('WIN');
      setTimeout(() => onGameEnd(false), 2000);
    } else if (enemyHp <= 0) {
      setPlayerAction('WIN');
      setEnemyAction('LOSE');
      setTimeout(() => onGameEnd(true), 2000);
    }
  }, [playerHp, playerSp, enemyHp]);

  // Enemy AI
  useEffect(() => {
    if (isPaused || playerHp <= 0 || enemyHp <= 0) return;

    const aiInterval = setInterval(() => {
      const rand = Math.random();
      if (rand < 0.35) {
        performEnemyAttack();
      } else if (rand < 0.55) {
        performEnemySkill();
      }
    }, 1600);

    return () => clearInterval(aiInterval);
  }, [playerHp, enemyHp, isDefending, isPaused]);

  const performEnemyAttack = () => {
    setEnemyAction('ATTACK');
    setTimeout(() => setEnemyAction('IDLE'), 500);

    const baseDmg = 45;
    const damage = isDefending ? Math.floor(baseDmg * 0.2) : baseDmg;

    setPlayerHp(prev => Math.max(0, prev - damage));
    setPlayerAction('HURT');
    setTimeout(() => setPlayerAction('IDLE'), 400);

    setBattleLog(`${enemy.name}의 공격! ${damage} 피해.`);
  };

  const performEnemySkill = () => {
    const skill = enemy.skills[Math.floor(Math.random() * enemy.skills.length)];
    setEnemyAction('SKILL');
    setTimeout(() => setEnemyAction('IDLE'), 800);
    setVisualEffect(skill.animationColor);
    setTimeout(() => setVisualEffect(null), 500);

    const damage = isDefending ? Math.floor(skill.damage * 0.4) : skill.damage;

    setPlayerHp(prev => Math.max(0, prev - damage));
    setPlayerAction('HURT');
    setTimeout(() => setPlayerAction('IDLE'), 600);

    setBattleLog(`${enemy.name}의 ${skill.name}! ${damage} 피해!`);
  };

  // --- Player Actions ---

  const handleAttack = () => {
    if (isPaused || (playerAction !== 'IDLE' && playerAction !== 'DEFEND')) return;
    
    // Slash cost 1
    if (playerSp < 1) {
        setBattleLog('호흡이 부족합니다!');
        return;
    }

    setIsDefending(false);
    setPlayerAction('ATTACK');
    setTimeout(() => setPlayerAction('IDLE'), 300);

    const dmg = 40 + Math.floor(Math.random() * 15);
    setEnemyHp(prev => Math.max(0, prev - dmg));
    setPlayerSp(prev => Math.max(0, prev - 1)); // Cost 1

    setEnemyAction('HURT');
    setTimeout(() => setEnemyAction('IDLE'), 300);

    setBattleLog(`일반 공격! ${dmg} 피해.`);
  };

  const handleDefend = () => {
    if (isPaused || playerAction !== 'IDLE') return;
    setIsDefending(true);
    setPlayerAction('DEFEND');
    setBattleLog('방어 태세!');
    setTimeout(() => {
        setIsDefending(false);
        setPlayerAction(prev => prev === 'DEFEND' ? 'IDLE' : prev);
    }, 1500);
  };

  const handleRecover = () => {
    if (isPaused || playerAction !== 'IDLE') return;
    setIsDefending(false);
    setPlayerAction('RECOVER');
    setVisualEffect('bg-blue-200');
    setTimeout(() => setVisualEffect(null), 300);
    setTimeout(() => setPlayerAction('IDLE'), 600);

    setPlayerSp(prev => Math.min(player.maxSp, prev + player.spRecovery));
    setBattleLog('전집중 호흡! 호흡을 가다듬었다.');
  };

  const handleSkill = (skill: Skill) => {
    if (isPaused || (playerAction !== 'IDLE' && playerAction !== 'DEFEND')) return;
    if (cooldowns[skill.id] > Date.now()) return;
    
    if (playerSp < skill.cost) {
        setBattleLog('호흡이 흐트러져 기술을 쓸 수 없다!');
        return;
    }

    setIsDefending(false);
    setPlayerAction('SKILL');
    setTimeout(() => setPlayerAction('IDLE'), 800);

    setVisualEffect(skill.animationColor);
    setTimeout(() => setVisualEffect(null), 500);

    // Consume SP (Breath)
    setPlayerSp(prev => prev - skill.cost);
    setBattleLog(`${skill.name}! (호흡 -${skill.cost})`);

    setEnemyHp(prev => Math.max(0, prev - skill.damage));
    setEnemyAction('HURT');
    setTimeout(() => setEnemyAction('IDLE'), 600);

    setCooldowns(prev => ({ ...prev, [skill.id]: Date.now() + skill.cooldown }));
  };

  const getCooldownPercent = (skillId: string, duration: number) => {
    const end = cooldowns[skillId];
    if (!end || end < Date.now()) return 0;
    const remaining = end - Date.now();
    return (remaining / duration) * 100;
  };

  // Tick for UI updates (cooldown bars)
  const [, setTick] = useState(0);
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => setTick(t => t + 1), 100);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden">
        
        {visualEffect && (
            <div className={`absolute inset-0 z-10 pointer-events-none opacity-40 mix-blend-hard-light ${visualEffect} animate-pulse`}></div>
        )}

        {/* --- Battle Stage --- */}
        <div className="flex-1 flex items-end justify-between px-4 pb-32 md:px-24 md:pb-48 relative">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-bottom opacity-40 grayscale contrast-125"></div>
             
             {/* Player */}
             <div className={`relative z-10 transition-transform duration-200 ${
                 playerAction === 'ATTACK' ? 'translate-x-20' : 
                 playerAction === 'SKILL' ? 'translate-x-32 scale-110' :
                 playerAction === 'RECOVER' ? 'scale-95 brightness-110' :
                 playerAction === 'HURT' ? '-translate-x-10 opacity-70' :
                 playerAction === 'DEFEND' ? 'scale-90 brightness-75' : ''
             }`}>
                <div className={`w-28 h-28 md:w-44 md:h-44 rounded-full shadow-2xl flex items-center justify-center text-5xl md:text-8xl border-4 ${player.accentColor} ${player.color} relative overflow-hidden ring-4 ring-black/50`}>
                     {player.icon}
                     {playerAction === 'SKILL' && <div className="absolute inset-0 bg-white/50 animate-ping"></div>}
                     {playerAction === 'RECOVER' && <div className="absolute inset-0 bg-blue-400/30 animate-pulse"></div>}
                </div>
                {isDefending && <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-blue-300 font-bold flex items-center gap-1"><Shield className="w-4 h-4"/> 방어</div>}
             </div>

             {/* Log */}
             <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none z-20 px-4">
                 <div className="text-xl md:text-3xl font-black text-white drop-shadow-[0_2px_2px_rgba(0,0,0,1)] animate-[bounce_0.5s_infinite]">
                     {battleLog}
                 </div>
             </div>

             {/* Enemy */}
             <div className={`relative z-10 transition-transform duration-200 ${
                 enemyAction === 'ATTACK' ? '-translate-x-20' : 
                 enemyAction === 'SKILL' ? '-translate-x-32 scale-110' :
                 enemyAction === 'HURT' ? 'translate-x-10 opacity-70' : ''
             }`}>
                <div className={`w-28 h-28 md:w-44 md:h-44 rounded-full shadow-2xl flex items-center justify-center text-5xl md:text-8xl border-4 border-red-900 ${enemy.color} relative overflow-hidden ring-4 ring-black/50`}>
                     {enemy.icon}
                     {enemyAction === 'SKILL' && <div className="absolute inset-0 bg-purple-500/50 animate-ping"></div>}
                </div>
             </div>
        </div>

        {/* --- Controls --- */}
        <div className="h-auto bg-gray-900 border-t-2 border-gray-700 p-2 md:p-4 relative z-20">
             {/* Scrollable Grid for Controls */}
             <div className="max-w-4xl mx-auto grid grid-cols-3 gap-2 h-48 md:h-60 overflow-y-auto custom-scrollbar">
                 
                 {/* Basic Actions */}
                 <button 
                    onClick={handleRecover}
                    className="bg-gray-800 hover:bg-gray-700 border-b-4 border-gray-950 rounded-lg flex flex-col items-center justify-center gap-1 active:border-b-0 active:translate-y-1 shadow-lg group min-h-[5rem]"
                 >
                     <Wind className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                     <span className="text-sm font-bold text-blue-200">호흡 회복</span>
                 </button>

                 <button 
                    onClick={handleAttack}
                    className="bg-gray-800 hover:bg-gray-700 border-b-4 border-gray-950 rounded-lg flex flex-col items-center justify-center gap-1 active:border-b-0 active:translate-y-1 shadow-lg group min-h-[5rem]"
                 >
                     <Sword className="w-6 h-6 text-gray-400 group-hover:scale-110 transition-transform" />
                     <span className="text-sm font-bold text-gray-200">베기</span>
                     <span className="text-[10px] text-blue-400 font-mono">SP -1</span>
                 </button>

                 <button 
                    onClick={handleDefend}
                    className={`bg-gray-800 hover:bg-gray-700 border-b-4 border-gray-950 rounded-lg flex flex-col items-center justify-center gap-1 active:border-b-0 active:translate-y-1 shadow-lg group min-h-[5rem] ${isDefending ? 'bg-blue-900/50 border-blue-500' : ''}`}
                 >
                     <Shield className="w-6 h-6 text-gray-400 group-hover:scale-110 transition-transform" />
                     <span className="text-sm font-bold text-gray-200">방어</span>
                 </button>

                 {/* Skills */}
                 {player.skills.map((skill) => {
                     const onCooldown = cooldowns[skill.id] > Date.now();
                     const notEnoughSp = playerSp < skill.cost;
                     const cooldownPct = getCooldownPercent(skill.id, skill.cooldown);

                     return (
                        <button 
                            key={skill.id}
                            onClick={() => handleSkill(skill)}
                            disabled={onCooldown || notEnoughSp}
                            className={`
                                relative rounded-lg flex flex-col items-center justify-center gap-0.5 active:border-b-0 active:translate-y-1 overflow-hidden border-b-4 shadow-lg min-h-[5rem]
                                ${notEnoughSp ? 'bg-gray-800 opacity-60 border-gray-900' : 'bg-gray-800 border-gray-950 hover:bg-gray-750'}
                                ${onCooldown ? 'cursor-not-allowed opacity-60' : ''}
                            `}
                        >
                            <div className="absolute inset-0 bg-black/60 z-10 transition-all ease-linear" style={{ height: `${cooldownPct}%` }}></div>

                            <div className="text-lg z-0">{skill.icon}</div>
                            <span className="font-bold text-white z-0 text-xs text-center leading-tight px-1 truncate w-full">{skill.name}</span>
                            <div className="flex items-center gap-0.5 text-[10px] text-blue-300 font-bold z-0 bg-black/50 px-1.5 rounded-full mt-0.5">
                                <Wind className="w-3 h-3" />
                                {skill.cost}
                            </div>
                        </button>
                     );
                 })}
             </div>
        </div>
    </div>
  );
};

export default GameBoard;