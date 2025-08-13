import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import useCountUp from '../hooks/useCountUp';

const StatsTile = ({ count, text }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const countNumber = parseInt(count, 10) || 0;
  const animatedCount = useCountUp(inView ? countNumber : 0, 1500);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const statVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="stats-card"
      ref={ref}
      variants={statVariants}
      initial="hidden"
      animate={controls}
    >
      <h2 className="stats-count">{animatedCount}{isNaN(countNumber) ? count.slice(-1) : '+'}</h2>
      <p>{text}</p>
    </motion.div>
  );
};

export default StatsTile;
