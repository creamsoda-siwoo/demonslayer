
import React, { useState, useEffect } from 'react';
import { GameState, Character, Enemy } from './types';
import { ENEMIES } from './constants';
import StartScreen from './components/StartScreen';
import GameBoard from './components/GameBoard';
import HUD from './components/HUD';
import GameOver from './components/GameOver';
import { Pause } from 'lucide-react';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.MENU);
  const [selectedChar, setSelectedChar] = useState<Character | null>(null);
  const [currentEnemy, setCurrentEnemy] = useState<Enemy | null>(null);
  
  // Battle State
  const [currentStats, setCurrentStats] = useState({ hp: 0, sp: 0, enemyHp: 0 });
  const [isVictory, setIsVictory] = useState(false);

  // Pause Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        togglePause();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState]);

  const togglePause = () => {
    if (gameState === GameState.BATTLE) {
      setGameState(GameState.PAUSED);
    } else if (gameState === GameState.PAUSED) {
      setGameState(GameState.BATTLE);
    }
  };

  const handleStart = (char: Character) => {
    setSelectedChar(char);
    // Select Random Enemy
    const randomEnemy = ENEMIES[Math.floor(Math.random() * ENEMIES.length)];
    setCurrentEnemy(randomEnemy);
    
    setCurrentStats({ hp: char.maxHp, sp: char.maxSp, enemyHp: randomEnemy.maxHp });
    setGameState(GameState.BATTLE);
  };

  const handleUpdateStats = (hp: number, sp: number, enemyHp: number) => {
    setCurrentStats({ hp, sp, enemyHp });
  };

  const handleGameEnd = (victory: boolean) => {
    setIsVictory(victory);
    setGameState(victory ? GameState.VICTORY : GameState.DEFEAT);
  };

  const handleRestart = () => {
    setGameState(GameState.MENU);
    setSelectedChar(null);
    setCurrentEnemy(null);
  };

  return (
    <div className="min-h-screen w-full bg-gray-950 text-white font-sans overflow-hidden select-none relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
      
      <div className="relative z-10 w-full h-screen flex flex-col">
        
        {/* Pause Button / Indicator */}
        {(gameState === GameState.BATTLE || gameState === GameState.PAUSED) && (
            <button 
                onClick={togglePause}
                className="absolute top-4 right-4 z-[60] p-2 bg-gray-800/80 rounded-full hover:bg-gray-700 text-white border border-gray-600"
            >
                <Pause className="w-6 h-6" />
            </button>
        )}
        
        {(gameState === GameState.BATTLE || gameState === GameState.PAUSED) && selectedChar && currentEnemy && (
             <HUD 
                player={selectedChar} 
                enemy={currentEnemy} 
                playerHp={currentStats.hp} 
                playerSp={currentStats.sp}
                enemyHp={currentStats.enemyHp} 
             />
        )}

        <div className="flex-1 w-full h-full relative">
            {gameState === GameState.MENU && (
                <StartScreen onSelect={handleStart} />
            )}

            {(gameState === GameState.BATTLE || gameState === GameState.PAUSED) && selectedChar && currentEnemy && (
                <GameBoard 
                    player={selectedChar} 
                    enemy={currentEnemy}
                    isPaused={gameState === GameState.PAUSED}
                    onGameEnd={handleGameEnd} 
                    updateStats={handleUpdateStats}
                />
            )}

            {/* Pause Overlay */}
            {gameState === GameState.PAUSED && (
                <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-200">
                    <div className="bg-gray-900 border-2 border-gray-600 p-8 rounded-xl shadow-2xl text-center">
                        <h2 className="text-4xl font-black text-white mb-4">일시 정지</h2>
                        <p className="text-gray-400 mb-6">잠시 휴식 중입니다.</p>
                        <button 
                            onClick={togglePause}
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold"
                        >
                            계속하기
                        </button>
                    </div>
                </div>
            )}

            {(gameState === GameState.VICTORY || gameState === GameState.DEFEAT) && (
                <GameOver 
                    isVictory={gameState === GameState.VICTORY} 
                    onRestart={handleRestart} 
                />
            )}
        </div>
      </div>
    </div>
  );
};

export default App;
