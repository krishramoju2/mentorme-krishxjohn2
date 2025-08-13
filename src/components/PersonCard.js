import React from 'react';
import { motion } from 'framer-motion';

const PersonCard = ({ image, name, title, course, badge, type }) => {
  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 260, damping: 20, duration: 0.6 } },
  };

  const glowVariants = {
    initial: { boxShadow: '0 0 0px var(--accent-color)' },
    hover: { boxShadow: '0 0 25px var(--accent-color)', transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="person-card"
      variants={cardVariants}
      whileHover="hover"
      initial="initial"
      animate="visible"
    >
      <motion.div variants={glowVariants} className="card-hover-effect">
        <div className="card-header">
          <img src={image} alt={name} className="profile-img" />
          <span className="badge">{badge}</span>
        </div>
        <h3>{name}</h3>
        <p className="title">{title}</p>
        <p className="course">{course}</p>
        <div className={`course-type-tag ${type.replace(/\s+/g, '-').toLowerCase()}`}>
          {type}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PersonCard;
