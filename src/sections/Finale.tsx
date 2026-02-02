import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import { motion } from 'framer-motion'

interface Props { unlocked: boolean }

export default function Finale({ unlocked }: Props) {
  const [showConfetti, setShowConfetti] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [answered, setAnswered] = useState(false)

  useEffect(() => {
    if (unlocked) {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }
  }, [unlocked])

  const handleYes = () => {
    setAnswered(true)
    setShowConfetti(true)
    const timer = setTimeout(() => setShowConfetti(false), 8000)
    return () => clearTimeout(timer)
  }

  if (!unlocked) return null

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-[var(--color-midnight)] via-black to-[var(--color-midnight)] snap-start overflow-hidden" style={{ scrollSnapAlign: 'start' }}>
      {showConfetti && <Confetti width={dimensions.width} height={dimensions.height} numberOfPieces={300} gravity={0.15} />}

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="text-center z-10 px-6"
      >
        {!answered ? (
          <>
            <h1 className="text-6xl md:text-7xl font-bold mb-12 text-[var(--color-soft-gold)]">
              Will you be my Valentine? 💕
            </h1>
            <div className="flex gap-8 justify-center mt-16">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleYes}
                className="px-12 py-6 bg-[var(--color-soft-gold)] text-[var(--color-midnight)] rounded-full text-3xl font-bold hover:bg-white transition"
              >
                YES! 💖
              </motion.button>
              <motion.button
                whileHover={{ scale: 0.95, rotate: 5 }}
                whileTap={{ scale: 0.85 }}
                onClick={handleYes}
                className="px-12 py-6 bg-white/20 text-white rounded-full text-3xl font-bold hover:bg-white/30 transition"
              >
                Also YES! 💕
              </motion.button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-7xl md:text-9xl font-bold mb-8 text-[var(--color-soft-gold)]">
              Happy Valentine's, my love! 💖
            </h1>
            <p className="text-4xl md:text-5xl font-handwriting mb-12">
              This is just the beginning…
            </p>
            <p className="text-2xl opacity-90">I can't wait for forever with you.</p>
          </>
        )}
      </motion.div>
    </section>
  )
}