import { useState } from 'react'
import './App.css'
import { Button } from '@/components/ui/button'
import { HelloKittyCharacter } from '@/components/HelloKittyCharacter'
import '@/styles/kawaii.css'

function App() {
  const [message, setMessage] = useState("")
  const [isAnimating, setIsAnimating] = useState(false)

  const handleKittyClick = () => {
    setMessage("Hello! I'm Hello Kitty! 🎀")
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 600)
  }

  return (
    <div className="min-h-screen kawaii-gradient-bg kawaii-bg-hearts flex flex-col items-center justify-center p-8">
      <div className="kawaii-card max-w-2xl w-full text-center space-y-8 kawaii-slide-in-up">
        <h1 className="text-5xl font-bold kawaii-text-gradient" style={{ fontFamily: 'Quicksand, sans-serif' }}>
          Welcome to Hello Kitty's World!
        </h1>
        
        <p className="text-xl text-gray-600" style={{ fontFamily: 'Quicksand, sans-serif' }}>
          Click on Hello Kitty to say hello!
        </p>

        <div className="flex justify-center py-8">
          <HelloKittyCharacter onClick={handleKittyClick} isAnimating={isAnimating} />
        </div>

        {message && (
          <div className="kawaii-slide-in-down">
            <p className="text-2xl font-semibold" style={{ 
              color: 'var(--kawaii-pink-primary)',
              fontFamily: 'Quicksand, sans-serif',
              textShadow: '2px 2px 4px rgba(255, 105, 180, 0.2)'
            }}>
              {message}
            </p>
          </div>
        )}

        <div className="pt-4">
          <Button 
            onClick={() => setMessage("")} 
            className="kawaii-button"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
