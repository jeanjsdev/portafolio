export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 md:p-16">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-4">
          <span className="text-xs sm:text-sm font-mono text-gray-500 dark:text-gray-400">
            ✦ <span className="text-blue-600 dark:text-blue-400">JeanJSDev</span> ✦
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4">
          <span className="block">Hola, soy</span>
          <span className="text-blue-600 dark:text-blue-400">Jean Oropeza</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2">
          Full Stack Developer · React & Next.js
        </p>

        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
          <span className="font-medium text-gray-700 dark:text-gray-300">Transformando ideas en soluciones</span>
          <br />
          Resolviendo problemas del día a día con código limpio y escalable.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8">
          <a
  href="/CV-Jean-Oropeza-2026.pdf"
  download
  className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg text-sm sm:text-base transition-colors"
>
  📄 Descargar CV
</a>
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg text-sm sm:text-base transition-colors"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium px-6 py-3 rounded-lg text-sm sm:text-base transition-colors"
          >
            Contactar
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-2 justify-center">
          {['React', 'Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL'].map((tech) => (
            <span
              key={tech}
              className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}