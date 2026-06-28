'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Estado inicial: oculto y desplazado hacia abajo
    element.style.opacity = '0';
    element.style.transform = 'translateY(60px)';
    element.style.transition = `opacity 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
    element.style.transitionDelay = `${delay}ms`;
    element.style.willChange = 'transform, opacity';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Estado final: visible y en su lugar
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            observer.unobserve(element);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [delay, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}