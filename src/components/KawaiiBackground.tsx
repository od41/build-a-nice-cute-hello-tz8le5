import { motion } from 'framer-motion'
import { useMemo } from 'react'

interface DecorativeItem {
  id: number
  type: 'heart' | 'star' | 'circle' | 'bow'
  x: number
  y: number
  size: number
  duration: number
  delay: number
  color: string
}

export const KawaiiBackground = () => {
  // Generate random decorative items
  const decorativeItems = useMemo<DecorativeItem[]>(() => {
    const items: DecorativeItem[] = []
    const colors = [
      'rgba(255, 105, 180, 0.15)', // hot pink
      'rgba(255, 182, 193, 0.15)', // light pink
      'rgba(221, 160, 221, 0.15)', // plum
      'rgba(135, 206, 235, 0.15)', // sky blue
      'rgba(255, 241, 118, 0.15)', // light yellow
    ]
    
    const types: DecorativeItem['type'][] = ['heart', 'star', 'circle', 'bow']
    
    // Create 25 random decorative elements
    for (let i = 0; i < 25; i++) {
      items.push({
        id: i,
        type: types[Math.floor(Math.random() * types.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 30 + 20, // 20-50px
        duration: Math.random() * 10 + 15, // 15-25s
        delay: Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }
    
    return items
  }, [])

  const renderShape = (item: DecorativeItem) => {
    const baseStyle = {
      width: item.size,
      height: item.size,
    }

    switch (item.type) {
      case 'heart':
        return (
          <svg viewBox="0 0 32 32" style={baseStyle} fill={item.color}>
            <path d="M16 28c-1-1-12-8-12-16 0-4 3-6 6-6 2 0 4 1 6 4 2-3 4-4 6-4 3 0 6 2 6 6 0 8-11 15-12 16z" />
          </svg>
        )
      case 'star':
        return (
          <svg viewBox="0 0 32 32" style={baseStyle} fill={item.color}>
            <path d="M16 2l4 12h12l-10 8 4 12-10-8-10 8 4-12-10-8h12z" />
          </svg>
        )
      case 'bow':
        return (
          <svg viewBox="0 0 32 32" style={baseStyle} fill={item.color}>
            <path d="M8 16c0-4 2-8 8-8s8 4 8 8-2 8-8 8-8-4-8-8z" />
            <circle cx="8" cy="16" r="6" />
            <circle cx="24" cy="16" r="6" />
          </svg>
        )
      case 'circle':
      default:
        return (
          <div 
            style={{
              ...baseStyle,
              borderRadius: '50%',
              backgroundColor: item.color,
            }} 
          />
        )
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {decorativeItems.map((item) => (
        <motion.div
          key={item.id}
          className="absolute"
          style={
            {
              left: `${item.x}%`,
              top: `${item.y}%`,
            }
          }
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(item.id) * 20, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {renderShape(item)}
        </motion.div>
      ))}
      
      {/* Floating larger hearts in corners */}
      <motion.div
        className="absolute top-10 left-10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg width="60" height="60" viewBox="0 0 32 32" fill="rgba(255, 105, 180, 0.2)">
          <path d="M16 28c-1-1-12-8-12-16 0-4 3-6 6-6 2 0 4 1 6 4 2-3 4-4 6-4 3 0 6 2 6 6 0 8-11 15-12 16z" />
        </svg>
      </motion.div>
      
      <motion.div
        className="absolute top-10 right-10"
        animate={{
          y: [0, -25, 0],
          rotate: [0, -15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      >
        <svg width="50" height="50" viewBox="0 0 32 32" fill="rgba(221, 160, 221, 0.25)">
          <path d="M16 2l4 12h12l-10 8 4 12-10-8-10 8 4-12-10-8h12z" />
        </svg>
      </motion.div>
      
      <motion.div
        className="absolute bottom-10 left-10"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      >
        <svg width="55" height="55" viewBox="0 0 32 32" fill="rgba(135, 206, 235, 0.2)">
          <path d="M16 2l4 12h12l-10 8 4 12-10-8-10 8 4-12-10-8h12z" />
        </svg>
      </motion.div>
      
      <motion.div
        className="absolute bottom-10 right-10"
        animate={{
          y: [0, -18, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      >
        <svg width="65" height="65" viewBox="0 0 32 32" fill="rgba(255, 182, 193, 0.2)">
          <path d="M16 28c-1-1-12-8-12-16 0-4 3-6 6-6 2 0 4 1 6 4 2-3 4-4 6-4 3 0 6 2 6 6 0 8-11 15-12 16z" />
        </svg>
      </motion.div>
    </div>
  )
}
