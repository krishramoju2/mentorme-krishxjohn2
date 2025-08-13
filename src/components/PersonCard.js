import React from 'react';
import { motion } from 'framer-motion';
import { LuFeather, LuShieldCheck, LuSparkles } from 'react-icons/lu';

const TestimonialCard = ({ image, name, title, course, badge, type }) => {
  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0, filter: 'blur(10px)' },
    visible: { scale: 1, opacity: 1, filter: 'blur(0px)', transition: { type: 'spring', stiffness: 100, damping: 20, duration: 0.8 } },
  };

  const badgeIcon = {
    'AIM': <LuFeather />,
    'SkillBringer': <LuShieldCheck />,
    'Flipkart': <LuSparkles />,
  }[badge] || <LuSparkles />;

  const badgeColor = {
    'AIM': 'var(--glow-cyan)',
    'SkillBringer': 'var(--glow-purple)',
    'Flipkart': 'var(--glow-green)',
  }[badge] || 'var(--glow-yellow)';

  return (
    <motion.div
      className="testimonial-card"
      variants={cardVariants}
      whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 210, 211, 0.4)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
    >
      <div className="card-border"></div>
      <div className="testimonial-header">
       
        <div className="testimonial-info">
          <h3 className="testimonial-name">{name}</h3>
          <p className="testimonial-title">{title}</p>
        </div>
        <div className="badge" style={{ color: badgeColor, border: `1px solid ${badgeColor}` }}>
          <span className="badge-icon" style={{ color: badgeColor }}>
            {badgeIcon}
          </span>
          {badge}
        </div>
      </div>
      <p className="testimonial-course-name">{course}</p>
      <div className="testimonial-course-type">
        {type}
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
