
import React from 'react';
import { CHARACTERS } from '../constants';
import { Character } from '../types';
import { Sword, Wind } from 'lucide-react';

interface StartScreenProps {
  onSelect: (char: Character) => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onSelect }) => {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full z-10 relative p-4 animate-in fade-in duration-700 overflow-y-auto custom-scrollbar">
      
      <div className="text-center my-8 shrink-0">
        <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-t from-red-800 to-red-500 mb-4 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">
          귀멸의 칼날: 혈투
        </h1>
        <p className="text-gray-300 text-lg">
          호흡을 가다듬고 전집중으로 오니를 베어라.<br/>
          상현의 오니가 무작위로 등장합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl pb-20 shrink-0">
        {CHARACTERS.map((char) => (
          <button
            key={char.id}
            onClick={() => onSelect(char)}
            className="group relative overflow-hidden bg-gray-900/80 border border-gray-700 hover:border-blue-400 rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] active:scale-95 text-left shadow-lg backdrop-blur-sm flex items-center gap-4"
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${char.color}`}></div>
            
            <div 
                className={`w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center text-4xl shadow-lg border-2 ${char.accentColor} bg-gray-800 group-hover:bg-gray-700 transition-colors`}
            >
                {char.icon}
            </div>
            
            <div className="flex-1 min-w-0">
                <h3 className="text-xl font-black text-white truncate">
                    {char.name}
                </h3>
                <p className="text-xs text-gray-400 truncate">{char.description}</p>
                <div className="flex items-center gap-2 mt-2 text-xs font-mono text-gray-500">
                   <span className="flex items-center gap-1"><Wind className="w-3 h-3 text-blue-400"/> 호흡 {char.maxSp}</span>
                   <span className="w-px h-3 bg-gray-700"></span>
                   <span className="flex items-center gap-1"><Sword className="w-3 h-3 text-red-400"/> 기술 {char.skills.length}</span>
                </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StartScreen;
