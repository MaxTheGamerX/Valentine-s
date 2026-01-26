import { useState } from 'react'
import { motion } from 'framer-motion'

interface Props { 
  onComplete: () => void
  finaleRef?: React.RefObject<HTMLDivElement>
}

const questions = [
  { q: "Where did we first meet?", options: ["School", "Park", "Kindergraten"], correct: 0 },
  { q: "What's our favorite movie?", options: ["The Tangled", "Frozen", "Harry Potter Series"], correct: 0 },
  { q: "What's the most embrassing memory of mine?", options: ["First time I burped in front of you", "Our first Google meet", "Our first hug"], correct: 2 },
  { q: "What's my favorite food?", options: ["Patties", "YOU😉", "Cake"], correct: 1 },
  { q: "What I found most adorable about you?", options: ["Your little dances", "Your puppy eyes", "Your smile", "ALL OF ABOVE"], correct: 3},
  { q: "What is my pet name for you?", options: ["Cutie pie", "Baccha", "Sweetheart"], correct: 1 },
]

export default function FunZone({ onComplete, finaleRef }: Props) {
  const [score, setScore] = useState(0)
  const [current, setCurrent] = useState(0)
  const [showFinalQuestion, setShowFinalQuestion] = useState(false)

  const handleAnswer = (idx: number) => {
    if (idx === questions[current].correct) setScore(s => s + 1)
    if (current + 1 < questions.length) {
      setCurrent(c => c + 1)
    } else {
      // Show final question instead of completing
      setShowFinalQuestion(true)
    }
  }

  const handleFinalQuestion = () => {
    // Scroll to the final section and trigger onComplete
    setTimeout(() => {
      onComplete()
      finaleRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 snap-start bg-gradient-to-br from-[var(--color-romantic-pink)] to-[var(--color-midnight)]" style={{ scrollSnapAlign: 'start' }}>
      <h2 className="text-6xl font-handwriting mb-16 text-white">How Well Do You Know Us? 🧠❤️</h2>

      {!showFinalQuestion ? (
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="max-w-xl w-full px-6"
        >
          <p className="text-3xl mb-10 text-center">{questions[current].q}</p>
          <div className="space-y-6">
            {questions[current].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className="w-full py-5 bg-white/20 backdrop-blur-lg rounded-xl text-xl hover:bg-white/30 transition"
              >
                {opt}
              </button>
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <h3 className="text-5xl mb-8">You got {score}/{questions.length}! 🎉</h3>
          <p className="text-2xl mb-12">You really do know us best 💕</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleFinalQuestion}
            className="px-12 py-4 bg-white text-[var(--color-midnight)] rounded-full text-2xl font-semibold hover:bg-gray-200 transition"
          >
            Continue to the Ultimate Question 💕
          </motion.button>
        </motion.div>
      )}
    </section>
  )
}