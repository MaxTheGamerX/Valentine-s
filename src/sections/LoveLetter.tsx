import { motion } from 'framer-motion'

interface Props {
  onComplete: () => void
}

const letterLines = [
  "My dearest love,",
  "",
  "From the moment our paths crossed, I knew life would never be the same.",
  "Every laugh, every late night talk, every fight we have, turns into growth…",
  "You've become my safe place, my adventure, my home.",
  "I know I am not perfect but I will never stop to be better for you",
  "Thank you for choosing me, for seeing me, for loving me even on my messy days.",
  "You've made ordinary moments feel like magic.",
  "Made me a better man and I hope I will keep pushing myself to be better",
  "I will keep choosing you every single day my littel bunny 🐰.",
  "",
  "Forever yours,",
  "Tanish The Idiot 💕"
]

export default function LoveLetter({ onComplete }: Props) {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 snap-start relative bg-gradient-to-br from-[var(--color-midnight)] to-[var(--color-lavender)]/30" style={{ scrollSnapAlign: 'start' }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true, amount: 0.3 }}
        onAnimationComplete={() => setTimeout(onComplete, 4000)} // auto-complete after reveal
        className="max-w-3xl mx-auto p-10 md:p-16 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl text-center md:text-left"
      >
        <motion.div
          className="space-y-6 text-2xl md:text-3xl leading-relaxed font-handwriting text-[var(--color-soft-gold)]"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 1.2 } }
          }}
        >
          {letterLines.map((line, i) => (
            <motion.p
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
              }}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>

      {/* Optional soft background music trigger – add <audio> if you want */}
    </section>
  )

}
