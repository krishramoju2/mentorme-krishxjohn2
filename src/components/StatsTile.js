import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import useCountUp from '../hooks/useCountUp';
import { LuZap, LuUsers, LuChartBar, LuTrendingUp, LuSparkles } from 'react-icons/lu';

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
    hidden: { y: 20, opacity: 0, filter: 'blur(10px)' },
    visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const statIcon = {
    'Courses on the Platform': <LuZap />,
    'Mentors from the Industry': <LuUsers />,
    'Students placed successfully': <LuChartBar />,
    'Average Salary Hike': <LuTrendingUp />,
  }[text] || <LuSparkles />;

  return (
    <motion.div
      className="stats-tile"
      ref={ref}
      variants={statVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="stats-icon">{statIcon}</div>
      <h3 className="stats-count-value">{animatedCount}{isNaN(countNumber) ? count.slice(-1) : '+'}</h3>
      <p className="stats-text">{text}</p>
    </motion.div>
  );
};

export default StatsTile;
