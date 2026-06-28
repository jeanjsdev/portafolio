'use client';

import { useState, useEffect } from 'react';
import { FaEye } from 'react-icons/fa';

export default function VisitCounter() {
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    // Obtener contador actual
    const currentVisits = localStorage.getItem('portfolioVisits');
    let count = currentVisits ? parseInt(currentVisits) : 0;
    
    // Incrementar si no se ha contado en esta sesión
    const sessionKey = 'portfolioVisited';
    if (!sessionStorage.getItem(sessionKey)) {
      count += 1;
      localStorage.setItem('portfolioVisits', count.toString());
      sessionStorage.setItem(sessionKey, 'true');
    }
    
    setVisits(count);
  }, []);

  if (visits === null) return null;

  return (
    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
      <FaEye className="w-4 h-4" />
      <span>{visits} visitas</span>
    </div>
  );
}