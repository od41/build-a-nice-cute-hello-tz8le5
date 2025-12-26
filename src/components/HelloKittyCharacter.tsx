import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles } from 'lucide-react'

interface HelloKittyCharacterProps {
  onKittyClick: () => void
}

export function HelloKittyCharacter({ onKittyClick }: HelloKittyCharacterProps) {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(true)
    onKittyClick()
    
    // Reset bounce animation state after animation completes
    setTimeout(() => {
      setIsClicked(false)
    }, 600)
  }

  return (
    <div className="relative inline-block">
      {/* Sparkle effects on click */}
      <AnimatePresence>
        {isClicked && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0, x: -30, y: -30 }}
              animate={{ opacity: 1, scale: 1, x: -50, y: -50 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute top-0 left-0 pointer-events-none"
            >
              <Sparkles className="w-6 h-6" style={{ color: 'var(--hk-yellow)' }} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 30, y: -30 }}
              animate={{ opacity: 1, scale: 1, x: 50, y: -50 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute top-0 right-0 pointer-events-none"
            >
              <Sparkles className="w-6 h-6" style={{ color: 'var(--hk-yellow)' }} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Hello Kitty Character */}
      <motion.div
        onClick={handleClick}
        className="cursor-pointer select-none"
        animate={{
          scale: isClicked ? [1, 1.2, 0.95, 1.05, 1] : 1,
          rotate: isClicked ? [0, -5, 5, -3, 0] : 0,
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut"
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        whileTap={{
          scale: 0.95
        }}
      >
        <div className="relative">
          {/* Character container with background glow */}
          <motion.div
            className="relative"
            animate={{
              boxShadow: isClicked 
                ? [
                    '0 0 0 rgba(255, 105, 180, 0)',
                    '0 0 40px rgba(255, 105, 180, 0.6)',
                    '0 0 20px rgba(255, 105, 180, 0.4)',
                    '0 0 0 rgba(255, 105, 180, 0)'
                  ]
                : '0 0 0 rgba(255, 105, 180, 0)'
            }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'white',
              borderRadius: '50%',
              padding: '40px',
              border: '4px solid var(--hk-pink)'
            }}
          >
            {/* Hello Kitty Face */}
            <div className="text-center" style={{ fontSize: '120px', lineHeight: '1' }}>
              <div className="relative inline-block">
                {/* Main face */}
                <div style={{ color: 'var(--hk-pink)' }}>🎀</div>
                
                {/* Character text representation */}
                <div 
                  className="font-bold mt-4"
                  style={{ 
                    fontSize: '32px',
                    color: 'var(--hk-hot-pink)',
                    letterSpacing: '2px',
                    textShadow: '2px 2px 4px rgba(255, 105, 180, 0.3)'
                  }}
                >
                  Hello Kitty
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating hearts animation */}
          <AnimatePresence>
            {isClicked && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: [0, 1, 0], y: -80 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute left-1/2 top-0 -translate-x-1/2 pointer-events-none"
                  style={{ fontSize: '24px' }}
                >
                  💕
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 0, x: 0 }}
                  animate={{ opacity: [0, 1, 0], y: -60, x: -40 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                  className="absolute left-1/2 top-0 pointer-events-none"
                  style={{ fontSize: '20px' }}
                >
                  💖
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 0, x: 0 }}
                  animate={{ opacity: [0, 1, 0], y: -60, x: 40 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
                  className="absolute left-1/2 top-0 pointer-events-none"
                  style={{ fontSize: '20px' }}
                >
                  💗
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Click me hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-center mt-6 text-lg font-semibold"
          style={{ color: 'var(--hk-hot-pink)' }}
        >
          ✨ Click me! ✨
        </motion.div>
      </motion.div>
    </div>
  )
}
