import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface CuteMessageProps {
  isVisible: boolean
  message?: string
  onClose?: () => void
}

export const CuteMessage = ({ 
  isVisible, 
  message = 'Hello cutie! 🎀', 
  onClose 
}: CuteMessageProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 15
            }
          }}
          exit={{ 
            opacity: 0, 
            y: -10, 
            scale: 0.9,
            transition: { duration: 0.2 }
          }}
          className="relative"
        >
          <motion.div
            className="kawaii-card bg-gradient-to-r from-pink-50 to-purple-50 border-pink-300 p-6 shadow-lg"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="flex items-start justify-between gap-4">
              <motion.div 
                className="flex-1"
                initial={{ x: -10 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <p 
                  className="text-2xl font-bold kawaii-text-gradient"
                  style={{ fontFamily: 'Quicksand, sans-serif' }}
                >
                  {message}
                </p>
              </motion.div>
              
              {onClose && (
                <motion.button
                  onClick={onClose}
                  className="text-pink-400 hover:text-pink-600 transition-colors p-1 rounded-full hover:bg-pink-100"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.2 }}
                  aria-label="Close message"
                >
                  <X size={20} />
                </motion.button>
              )}
            </div>
            
            {/* Decorative sparkles */}
            <div className="absolute -top-2 -left-2 text-2xl">
              <motion.span
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                ✨
              </motion.span>
            </div>
            <div className="absolute -bottom-2 -right-2 text-2xl">
              <motion.span
                animate={{ 
                  rotate: [360, 0],
                  scale: [1, 1.3, 1]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5
                }}
              >
                💖
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
