import { motion } from 'framer-motion';
import { useState } from 'react';

interface HelloKittyCharacterProps {
  onClick?: () => void;
  isAnimating?: boolean;
}

export const HelloKittyCharacter = ({ onClick, isAnimating = false }: HelloKittyCharacterProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(prev => prev + 1);
    onClick?.();
  };

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center cursor-pointer select-none"
      onClick={handleClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        scale: isAnimating ? [1, 1.2, 1] : isHovered ? 1.05 : 1,
        rotate: isAnimating ? [0, -10, 10, -10, 0] : 0,
      }}
      transition={{
        duration: isAnimating ? 0.6 : 0.3,
        ease: "easeInOut",
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Character Container */}
      <motion.div
        className="relative bg-gradient-to-br from-pink-100 to-pink-50 rounded-full p-8 shadow-lg border-4 border-pink-300"
        style={{
          boxShadow: '0 8px 24px rgba(255, 105, 180, 0.25), inset 0 2px 4px rgba(255, 105, 180, 0.1)',
        }}
        animate={{
          y: isAnimating ? [-5, 5, -5] : 0,
        }}
        transition={{
          duration: 0.5,
          repeat: isAnimating ? Infinity : 0,
          ease: "easeInOut",
        }}
      >
        {/* Hello Kitty Face */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Main Face */}
          <div className="text-8xl" style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))' }}>
            😺
          </div>
          
          {/* Pink Bow */}
          <motion.div
            className="absolute -top-2 -right-2 text-4xl"
            animate={{
              rotate: isAnimating ? [0, 15, -15, 0] : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            🎀
          </motion.div>
          
          {/* Sparkle effects when clicked */}
          {clickCount > 0 && (
            <>
              <motion.div
                className="absolute -top-4 -left-4 text-2xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0], rotate: 180 }}
                transition={{ duration: 0.8 }}
                key={`sparkle-1-${clickCount}`}
              >
                ✨
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4 text-2xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0], rotate: -180 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                key={`sparkle-2-${clickCount}`}
              >
                ✨
              </motion.div>
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-2xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0], rotate: 360 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                key={`sparkle-3-${clickCount}`}
              >
                💖
              </motion.div>
            </>
          )}
        </div>
      </motion.div>

      {/* Name Label */}
      <motion.div
        className="mt-4 px-6 py-2 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full shadow-md"
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        <span className="text-white font-bold text-lg" style={{ fontFamily: 'Quicksand, sans-serif' }}>
          Hello Kitty
        </span>
      </motion.div>

      {/* Floating hearts decoration */}
      {isHovered && (
        <>
          <motion.div
            className="absolute -left-8 top-1/4 text-2xl"
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            💗
          </motion.div>
          <motion.div
            className="absolute -right-8 top-1/4 text-2xl"
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            💗
          </motion.div>
        </>
      )}
    </motion.div>
  );
};
