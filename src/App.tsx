import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Sparkles, Star } from 'lucide-react'
import './App.css'
import './styles/animations.css'
import { Button } from '@/components/ui/button'
import { HelloKittyCharacter } from '@/components/HelloKittyCharacter'

function App() {
  const [showMessage, setShowMessage] = useState(false)

  const handleKittyClick = () => {
    setShowMessage(true)
  }

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #FFF0F5 0%, #FFB6C1 50%, #FF69B4 100%)'
    }}>
      {/* Floating decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Heart className="w-12 h-12" style={{ color: 'var(--hk-hot-pink)' }} fill="currentColor" />
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-32"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -10, 0]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <Sparkles className="w-10 h-10" style={{ color: 'var(--hk-yellow)' }} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 left-40"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 15, 0]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Star className="w-8 h-8" style={{ color: 'var(--hk-yellow)' }} fill="currentColor" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-20"
          animate={{
            y: [0, -18, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
        >
          <Heart className="w-10 h-10" style={{ color: 'var(--hk-pink)' }} fill="currentColor" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <h1 className="hk-title text-6xl md:text-8xl font-bold mb-4">
              Hello Kitty
            </h1>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl md:text-3xl mb-8"
            style={{ color: 'var(--hk-hot-pink)' }}
          >
            Welcome to the Cutest Fan Site! ✨
          </motion.h2>
          
          {/* Hello Kitty Character Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="my-12"
          >
            <HelloKittyCharacter onKittyClick={handleKittyClick} />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-lg md:text-xl mb-12 max-w-2xl mx-auto"
            style={{ color: '#666' }}
          >
            Discover the magical world of Hello Kitty! Explore galleries, fun facts, 
            and share your love for the most adorable character ever! 🎀
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Button
              onClick={() => setShowMessage(!showMessage)}
              className="hk-btn-primary text-lg px-8 py-6 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #FFB6C1 0%, #FF69B4 50%, #FF1493 100%)',
                border: 'none'
              }}
            >
              <Heart className="w-5 h-5 mr-2" fill="currentColor" />
              Show Some Love
            </Button>
            
            <Button
              className="hk-btn-secondary text-lg px-8 py-6 rounded-full"
              variant="outline"
              style={{
                borderColor: 'var(--hk-pink)',
                color: 'var(--hk-hot-pink)',
                borderWidth: '2px'
              }}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Explore More
            </Button>
          </motion.div>
          
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="mt-12 hk-card max-w-md mx-auto"
              style={{
                background: 'white',
                borderRadius: '24px',
                padding: '32px',
                boxShadow: '0 8px 32px rgba(255, 105, 180, 0.35)'
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                className="inline-block mb-4"
              >
                <Heart className="w-16 h-16 mx-auto" style={{ color: 'var(--hk-bow-red)' }} fill="currentColor" />
              </motion.div>
              <p className="text-2xl font-bold mb-2" style={{ color: 'var(--hk-hot-pink)' }}>
                You are pawsitively amazing!
              </p>
              <p className="text-gray-600">
                Thank you for visiting! Stay cute and spread kindness everywhere! 💕
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default App
