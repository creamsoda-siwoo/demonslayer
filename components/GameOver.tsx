
import React from 'react';
import { RotateCcw, Trophy, Skull } from 'lucide-react';

interface GameOverProps {
  isVictory?: boolean;
  onRestart: () => void;
}

const GameOver: React.FC<GameOverProps> = ({ isVictory, onRestart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full z-50 fixed inset-0 bg-black/90 backdrop-blur-sm p-6 animate-in fade-in duration-1000">
      
      {isVictory ? (
          <>
            <div className="mb-6 animate-bounce">
                <Trophy className="w-24 h-24 text-yellow-500" />
            </div>
            <h2 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600 mb-4 drop-shadow-[0_0_25px_rgba(234,179,8,0.6)]">
                승리(勝利)
            </h2>
            <p className="text-2xl text-gray-300 text-center mb-10 font-bold">
                상현의 오니를 멸살했습니다.<br/>
                오늘 밤은 당신이 지켰습니다.
            </p>
          </>
      ) : (
          <>
            <div className="mb-6 animate-pulse">
                <Skull className="w-24 h-24 text-red-700" />
            </div>
            <h2 className="text-7xl font-black text-red-700 mb-4 drop-shadow-[0_0_25px_rgba(185,28,28,0.6)] tracking-widest">
                패배(敗北)
            </h2>
            <p className="text-2xl text-gray-400 text-center mb-10">
                힘이 다했습니다...<br/>
                오니가 되어버릴지도 모릅니다.
            </p>
          </>
      )}

      <button
        onClick={onRestart}
        className="group flex items-center gap-4 px-12 py-5 bg-transparent border-2 border-white/20 hover:border-white text-white font-bold rounded-lg transition-all hover:scale-105 active:scale-95"
      >
        <RotateCcw className="w-6 h-6 group-hover:-rotate-180 transition-transform duration-500" />
        <span className="text-xl">새로운 전투 시작</span>
      </button>
    </div>
  );
};

export default GameOver;
