
import React from 'react';
import { Character, Enemy } from '../types';

interface HUDProps {
  player: Character;
  enemy: Enemy;
  playerHp: number;
  playerSp: number;
  enemyHp: number;
}

const HUD: React.FC<HUDProps> = ({ player, enemy, playerHp, playerSp, enemyHp }) => {
  const playerPercent = Math.max(0, (playerHp / player.maxHp) * 100);
  const playerSpPercent = Math.max(0, (playerSp / player.maxSp) * 100);
  const enemyPercent = Math.max(0, (enemyHp / enemy.maxHp) * 100);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 pt-4 select-none pointer-events-none z-50 relative">
      <div className="flex justify-between items-end mb-2">
         {/* Player Name */}
         <div className="flex items-center gap-2">
             <div className={`w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-gray-800 text-2xl`}>
                 {player.icon}
             </div>
             <div>
                <div className="text-xl font-black text-white leading-none shadow-black drop-shadow-md">{player.name}</div>
                <div className="text-xs text-blue-300 font-bold tracking-widest uppercase mt-1">Breath: {playerSp}/{player.maxSp}</div>
             </div>
         </div>

         {/* VS Logo */}
         <div className="absolute left-1/2 -translate-x-1/2 top-4 text-3xl font-black italic text-red-600 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">
             VS
         </div>

         {/* Enemy Name */}
         <div className="flex items-center gap-2 flex-row-reverse text-right">
             <div className={`w-12 h-12 rounded-full border-2 border-red-500 flex items-center justify-center bg-gray-800 text-2xl`}>
                 {enemy.icon}
             </div>
             <div>
                <div className="text-xl font-black text-red-200 leading-none shadow-black drop-shadow-md">{enemy.name}</div>
                <div className="text-xs text-red-400 font-bold tracking-widest uppercase mt-1">Upper Rank</div>
             </div>
         </div>
      </div>

      {/* Bars Container */}
      <div className="grid grid-cols-2 gap-4 md:gap-12 relative">
          
          {/* Player Bars */}
          <div className="flex flex-col gap-1">
              {/* HP */}
              <div className="relative h-6 bg-gray-900/80 border-2 border-gray-600 rounded skew-x-[-15deg] overflow-hidden shadow-lg">
                   <div 
                      className={`absolute right-0 top-0 h-full ${player.color} transition-all duration-300 ease-out flex items-center justify-end px-2`}
                      style={{ width: `${playerPercent}%`, left: 0 }}
                   >
                      <span className="text-xs font-bold text-white drop-shadow-md skew-x-[15deg]">{Math.floor(playerHp)}</span>
                   </div>
                   {playerPercent < 30 && <div className="absolute inset-0 bg-red-500/30 animate-pulse"></div>}
              </div>
              {/* SP (Breath) */}
              <div className="relative h-3 bg-gray-900/80 border border-gray-600 rounded skew-x-[-15deg] overflow-hidden shadow-lg w-[90%]">
                   <div 
                      className="absolute left-0 top-0 h-full bg-blue-500 transition-all duration-300 ease-out"
                      style={{ width: `${playerSpPercent}%` }}
                   ></div>
              </div>
          </div>

          {/* Enemy HP */}
          <div>
              <div className="relative h-6 bg-gray-900/80 border-2 border-gray-600 rounded skew-x-[15deg] overflow-hidden shadow-lg">
                   <div 
                      className="absolute left-0 top-0 h-full bg-pink-700 transition-all duration-300 ease-out flex items-center px-2"
                      style={{ width: `${enemyPercent}%`, right: 0 }}
                   >
                       <span className="text-xs font-bold text-white drop-shadow-md skew-x-[-15deg]">{Math.floor(enemyHp)}</span>
                   </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default HUD;
