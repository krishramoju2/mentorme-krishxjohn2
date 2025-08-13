import React from 'react';
import { motion } from 'framer-motion';
import PersonCard from './PersonCard';

const TestimonialSection = ({ testimonials }) => {
  return (
    <motion.div className="cards-container">
      {testimonials.map((person, index) => (
        <PersonCard key={index} {...person} />
      ))}
    </motion.div>
  );
};

export default TestimonialSection;
