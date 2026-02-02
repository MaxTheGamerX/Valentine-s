import { useRef, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import Milestone from '../components/Milestone'


interface Props {
  onComplete: () => void
}

export default function Timeline({ onComplete }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 20%'],
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      if (v > 0.6) onComplete()
    })

    return () => unsubscribe()
  }, [scrollYProgress, onComplete])

  return (
    <motion.section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center py-24 relative"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {/* Heading */}
      <h2 className="text-6xl font-handwriting mb-20 text-[var(--color-soft-gold)]">
        Our Journey 💫
      </h2>

      {/* Timeline content */}
      <div className="space-y-36 max-w-6xl w-full px-6">
        <Milestone
          title="First Meet"
          desc="That day when I literally fell for you..."
          img="/assets/first-meet.jpg"  //Place your image address after addign to the folder
          side="left"
        />

        <Milestone
          title="First Chat"
          desc="Late night talks that never ended"
          img="/assets/first-chat.jpg"
          side="right"
        />

        <Milestone
          title="Us now ❤️"
          desc="Still choosing you every single day"
          img="/assets/today.jpg"
          side="center"
          isLast
        />
      </div>
    </motion.section>
  )
}
