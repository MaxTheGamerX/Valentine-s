import { motion } from 'framer-motion'

interface Props {
  title: string
  desc: string
  img: string
  side: 'left' | 'right' | 'center'
  isLast?: boolean
}

export default function Milestone({ title, desc, img, side, isLast }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`flex flex-col md:flex-row items-center gap-12 ${
        side === 'left' ? 'md:flex-row-reverse' : ''
      } ${isLast ? 'justify-center' : ''}`}
    >
      <div className="w-full md:w-1/2">
        <img
          src={img}
          alt={title}
          className="w-full h-96 object-cover rounded-3xl shadow-2xl"
        />
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left">
        <h3 className="text-5xl font-handwriting mb-6 text-[var(--color-soft-gold)]">
          {title}
        </h3>
        <p className="text-xl leading-relaxed opacity-90">
          {desc}
        </p>
      </div>
    </motion.div>
  )
}
