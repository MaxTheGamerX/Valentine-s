import { useState } from 'react'
import { motion } from 'framer-motion'

interface Props {
  unlocked: boolean
  onComplete: () => void
}

const gifts = [
  {
    id: 1,
    emoji: '🎁',
    message: 'Remember how you used to sleep in summers cutie 😘',
    photo: '/assets/gift1.jpg',
  },
  {
    id: 2,
    emoji: '🎁',
    message: 'This is for all the times you made me laugh until I cried.',
    photo: '/assets/gift2.jpg',
  },
  {
    id: 3,
    emoji: '🎁',
    message: 'This is the final surprise… only for you 💖',
    photo: '/assets/final.jpg',
  },
]

export default function Surprises({ unlocked, onComplete }: Props) {
  const [opened, setOpened] = useState<number[]>([])

  const handleOpen = (id: number) => {
    if (!opened.includes(id)) {
      const next = [...opened, id]
      setOpened(next)
      if (next.length === gifts.length) onComplete()
    }
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20">
      <h2 className="text-6xl font-handwriting mb-20 text-[var(--color-soft-gold)]">
        Little Surprises for You 🎀
      </h2>

      <div className="flex flex-wrap justify-center gap-16 max-w-6xl">
        {gifts.map((gift) => {
          const isOpen = opened.includes(gift.id)
          const isLocked = gift.id === 3 && !unlocked

          return (
            <motion.div
              key={gift.id}
              className="relative w-56 h-56 flex items-center justify-center"
              whileHover={{
                scale: !isOpen && !isLocked ? 1.1 : 1,
              }}
              onClick={() => {
                if (!isLocked && !isOpen) handleOpen(gift.id)
              }}
            >
              {/* CLOSED STATE */}
              {!isOpen && (
                <div className="text-9xl select-none">
                  {gift.emoji}
                </div>
              )}

              {/* OPEN STATE */}
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-4 flex flex-col items-center justify-center text-center gap-3"
                >
                  <p className="text-sm leading-snug">
                    {gift.message}
                  </p>

                  <img
                    src={gift.photo}
                    alt="memory"
                    className="w-40 h-40 object-cover rounded-xl shadow-lg"
                    loading="eager"
                    onError={() =>
                      console.error('Image failed:', gift.photo)
                    }
                  />
                </motion.div>
              )}

              {/* LOCK */}
              {isLocked && !isOpen && (
                <div className="absolute -top-3 -right-3 text-3xl">
                  🔐
                </div>
              )}
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
