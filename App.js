import React from 'react';
import { motion } from 'framer-motion';
import './App.css';
import TestimonialSection from './components/TestimonialSection';
import StatsSection from './components/StatsSection';
import { testimonials } from './data/testimonials';
import { stats } from './data/stats';

const App = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="header-title">MENTORME _<span className="glow">KRISH Ramoju</span></h1>
        <p className="header-subtitle">Ignite your potential with the power of AI.</p>
      </header>
      <motion.div
        className="main-content-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <TestimonialSection testimonials={testimonials} />
        <StatsSection stats={stats} />
      </motion.div>
    </div>
  );
};

export default App;
