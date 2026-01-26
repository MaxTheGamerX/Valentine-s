import { motion } from 'framer-motion'
import FloatingHearts from '../components/FloatingHearts'
import { TypeAnimation } from 'react-type-animation' 

interface Props { onBegin: () => void }

export default function Landing({ onBegin }: Props) {
  return (
    <section
  className="h-screen flex flex-col items-center justify-center relative overflow-hidden text-white snap-start"
  style={{
    background: 'linear-gradient(to bottom right, #ff9ec1, #d7bdea, #0f172a)',
    scrollSnapAlign: 'start'
  }}
>
      <FloatingHearts count={15} />

      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="text-6xl md:text-8xl font-bold mb-12 text-center px-4"
      >
        <TypeAnimation
          sequence={[
            "Hey love…",
            1800,
            "I made something for us 💕",
            2200,
          ]}
          wrapper="span"
          speed={45}
          repeat={0}
        />
      </motion.h1>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        onClick={onBegin}
        className="px-12 py-6 bg-white text-[var(--color-midnight)] rounded-full text-3xl font-semibold shadow-2xl"
      >
        Tap to Begin Our Story →
      </motion.button>
    </section>
  )
}