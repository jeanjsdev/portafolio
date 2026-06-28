'use client';

const skills = {
  frontend: [
    { name: 'React', icon: '⚛️', level: 90 },
    { name: 'Next.js', icon: '▲', level: 85 },
    { name: 'TypeScript', icon: '📘', level: 80 },
    { name: 'Tailwind CSS', icon: '🎨', level: 85 },
  ],
  backend: [
    { name: 'Node.js', icon: '🟢', level: 80 },
    { name: 'Express', icon: '🚂', level: 75 },
    { name: 'PostgreSQL', icon: '🐘', level: 70 },
    { name: 'MongoDB', icon: '🍃', level: 65 },
  ],
  tools: [
    { name: 'Git', icon: '🔗', level: 85 },
    { name: 'Docker', icon: '🐳', level: 60 },
    { name: 'Vercel', icon: '▲', level: 80 },
    { name: 'Figma', icon: '🎯', level: 65 },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-mono text-blue-600 dark:text-blue-400 font-semibold">
            ✦ HABILIDADES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            Tecnologías que <span className="text-blue-600 dark:text-blue-400">domino</span>
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Herramientas y frameworks que uso para construir soluciones escalables y eficientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🖥️ Frontend</h3>
            <div className="space-y-4">
              {skills.frontend.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.icon} {skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">⚙️ Backend</h3>
            <div className="space-y-4">
              {skills.backend.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.icon} {skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-purple-600 dark:bg-purple-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🛠️ Herramientas</h3>
            <div className="space-y-4">
              {skills.tools.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.icon} {skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-green-600 dark:bg-green-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}