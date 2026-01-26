import { motion } from 'framer-motion'

interface Props { count: number }

export default function FloatingHearts({ count }: Props) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-5xl pointer-events-none select-none"
          initial={{ y: '100vh', opacity: 0, x: Math.random() * 100 - 50 }}
          animate={{
            y: '-150vh',
            opacity: [0, 0.9, 0],
            rotate: Math.random() * 40 - 20,
          }}
          transition={{
            duration: 10 + Math.random() * 8,
            repeat: Infinity,
            delay: i * 0.6 + Math.random() * 2,
            ease: "easeOut",
          }}
          style={{ left: `${Math.random() * 90 + 5}%` }}
        >
          {Math.random() > 0.5 ? '💖' : '✨💕'}
        </motion.div>
      ))}
    </>
  )
}