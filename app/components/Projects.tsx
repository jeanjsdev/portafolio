'use client';

const projects = [
  {
    title: 'TaskFlow - Gestor de Tareas',
    description: 'Aplicación full stack con drag & drop, autenticación JWT y base de datos en tiempo real. Ideal para equipos de trabajo.',
    tech: ['React', 'Next.js', 'PostgreSQL', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    github: 'https://github.com/jeanjsdev/taskflow',
    demo: 'https://taskflow.jeanjsdev.com',
  },
  {
    title: 'WeatherAPI - Microservicio de Clima',
    description: 'API REST que consume servicios externos de clima y geolocalización. Incluye autenticación, límites de uso y documentación con Swagger.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b0b?w=600&h=400&fit=crop',
    github: 'https://github.com/jeanjsdev/weatherapi',
    demo: 'https://weatherapi.jeanjsdev.com',
  },
  {
    title: 'CryptoDashboard - Análisis en Vivo',
    description: 'Dashboard interactivo que muestra precios, tendencias y noticias del mundo cripto. Actualización automática con WebSockets.',
    tech: ['React', 'Chart.js', 'WebSockets', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop',
    github: 'https://github.com/jeanjsdev/cryptodashboard',
    demo: 'https://crypto.jeanjsdev.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Proyectos que <span className="text-blue-600 dark:text-blue-400">Resuelven Problemas</span>
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Cada proyecto es una solución real a un problema cotidiano.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] sm:text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-4 flex items-center gap-3 border-t border-gray-200 dark:border-gray-800 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Ver código →
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Ver demo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}