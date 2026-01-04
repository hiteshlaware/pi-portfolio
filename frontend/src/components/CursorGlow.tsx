import React, { useEffect, useRef } from 'react';

const CursorGlow: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const glowPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animateGlow = () => {
      glowPos.current.x += (mousePos.current.x - glowPos.current.x) * 0.1;
      glowPos.current.y += (mousePos.current.y - glowPos.current.y) * 0.1;
      
      if (glowRef.current) {
        glowRef.current.style.left = `${glowPos.current.x}px`;
        glowRef.current.style.top = `${glowPos.current.y}px`;
      }
      
      requestAnimationFrame(animateGlow);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateGlow();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" />;
};

export default CursorGlow;
