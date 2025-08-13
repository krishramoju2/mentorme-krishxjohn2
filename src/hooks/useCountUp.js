import { useState, useEffect, useRef } from 'react';

// A custom hook to animate a number counting up from zero
const useCountUp = (end, duration) => {
  const [count, setCount] = useState(0);
  const start = useRef(null);

  useEffect(() => {
    let animationFrameId;
    
    const animate = (timestamp) => {
      if (!start.current) start.current = timestamp;
      const progress = timestamp - start.current;
      const step = Math.min(progress / duration, 1);
      setCount(Math.floor(step * end));
      if (step < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);
  
  return count;
};

export default useCountUp;
