import { useState, useRef } from 'react'
import Landing from './sections/Landing'
import Timeline from './sections/Timeline'
import LoveLetter from './sections/LoveLetter'
import Surprises from './sections/Surprises'
import FunZone from './sections/FunZone'
import Finale from './sections/Finale'

function App() {
  const [progress, setProgress] = useState(0)

  // Refs for smooth scrolling on button / future auto-progress
  const timelineRef = useRef<HTMLDivElement>(null)
  const finaleRef = useRef<HTMLDivElement>(null)

  const handleBegin = () => {
    setProgress(1)
    timelineRef.current?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    })
  }

  const handleSectionComplete = (section: number) => {
    setProgress(prev => Math.max(prev, section))
    // Optional later: auto-scroll to next section here if you want
  }

  return (
    <div 
      className="overflow-y-auto scroll-smooth"
      style={{ 
        height: '100vh',                    // equivalent to h-screen
        scrollSnapType: 'y proximity',      // proximity allows natural scrolling
        scrollSnapStop: 'normal'            // normal snapping behavior
      }}
    >
      <Landing onBegin={handleBegin} />

      <div ref={timelineRef}>
        <Timeline onComplete={() => handleSectionComplete(2)} />
      </div>

      <LoveLetter onComplete={() => handleSectionComplete(2.5)} />
      <Surprises unlocked={progress >= 2.5} onComplete={() => handleSectionComplete(3)} />
      <FunZone finaleRef={finaleRef as React.RefObject<HTMLDivElement>} onComplete={() => handleSectionComplete(4)} />
      <div ref={finaleRef}>
        <Finale unlocked={progress >= 4} />
      </div>
    </div>
  )
}

export default App