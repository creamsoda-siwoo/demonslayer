import React, { useState } from 'react';
import { StorySegment } from '../types';
import { ArrowRight } from 'lucide-react';

interface StoryViewerProps {
  story: StorySegment;
  onComplete: () => void;
}

const StoryViewer: React.FC<StoryViewerProps> = ({ story, onComplete }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < story.lines.length - 1) {
      setIndex(index + 1);
    } else {
      onComplete();
    }
  };

  const currentLine = story.lines[index];
  const isTanjiro = currentLine.speaker === '탄지로';
  const isNarrator = currentLine.speaker === 'narrator';

  return (
    <div className="absolute inset-0 z-50 flex items-end justify-center pb-8 px-4 bg-gradient-to-t from-black via-black/80 to-transparent">
      <div 
        className="w-full max-w-3xl bg-gray-900/95 border border-gray-600 rounded-xl p-6 shadow-2xl animate-in slide-in-from-bottom duration-300"
        onClick={handleNext}
      >
        <div className="flex flex-col gap-2">
            {!isNarrator && (
                <div className={`text-sm font-bold uppercase tracking-wider mb-1 ${
                    isTanjiro ? 'text-green-400' : 'text-red-400'
                }`}>
                    {currentLine.speaker}
                </div>
            )}
            
            <div className={`text-lg md:text-xl leading-relaxed ${isNarrator ? 'text-gray-400 italic text-center py-4' : 'text-white'}`}>
                {isNarrator ? `"${currentLine.text}"` : currentLine.text}
            </div>

            <div className="flex justify-end mt-4">
                <button 
                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors animate-pulse"
                >
                    다음 <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
      </div>
      
      {/* Background hint */}
      <div className="absolute top-10 left-0 w-full text-center text-gray-500 font-serif opacity-30 pointer-events-none">
          {story.title}
      </div>
    </div>
  );
};

export default StoryViewer;