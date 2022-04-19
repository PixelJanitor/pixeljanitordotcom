import { motion } from 'framer-motion'

const AnimatedAnimationText: React.FC = () => {
  const wrapper = {
    text: {
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const letter = {
    text: {
      scaleY: [1, 0.9, 1.2, 1],
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <motion.span variants={wrapper} animate='text' className='inline-flex origin-bottom'>
      <motion.span className='origin-bottom' variants={letter}>
        a
      </motion.span>
      <motion.span className='origin-bottom' variants={letter}>
        n
      </motion.span>
      <motion.span className='origin-bottom' variants={letter}>
        i
      </motion.span>
      <motion.span className='origin-bottom' variants={letter}>
        m
      </motion.span>
      <motion.span className='origin-bottom' variants={letter}>
        a
      </motion.span>
      <motion.span className='origin-bottom' variants={letter}>
        t
      </motion.span>
      <motion.span className='origin-bottom' variants={letter}>
        i
      </motion.span>
      <motion.span className='origin-bottom' variants={letter}>
        o
      </motion.span>
      <motion.span className='origin-bottom' variants={letter}>
        n
      </motion.span>
    </motion.span>
  )
}

export default AnimatedAnimationText
