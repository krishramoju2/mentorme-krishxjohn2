import React from 'react';
import { motion } from 'framer-motion';
import StatsTile from './StatsTile';

const StatsSection = ({ stats }) => {
  return (
    <motion.div className="stats-container">
      {stats.map((stat, index) => (
        <StatsTile key={index} {...stat} />
      ))}
    </motion.div>
  );
};

export default StatsSection;
