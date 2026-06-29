export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="mb-4">
              <span className="text-xs sm:text-sm font-mono text-blue-600 font-semibold">
                ✦ SOBRE MÍ
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="block">Construyendo el futuro</span>
              <span className="text-blue-400">línea a línea de código</span>
            </h2>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Soy <span className="font-semibold text-white">Jean Oropeza</span>, 
                Full Stack Developer con más de 10 años de experiencia 
                transformando ideas en soluciones digitales funcionales y escalables.
              </p>
              <p>
                Mi trayectoria comenzó en Venezuela, donde me formé como 
                <span className="font-semibold text-white"> Técnico Superior Universitario en Informática</span>, 
                y hoy continúa en Zaragoza, España, donde aplico mi pasión por la tecnología para resolver problemas del mundo real.
              </p>
              <p>
                Me especializo en el ecosistema <span className="font-semibold text-white">React</span> y 
                <span className="font-semibold text-white"> Next.js</span>, 
                combinando un código limpio con un diseño cuidadoso para crear experiencias web excepcionales.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-400">5+</div>
                <div className="text-xs sm:text-sm text-gray-400">Años de experiencia</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-400">10+</div>
                <div className="text-xs sm:text-sm text-gray-400">Proyectos completados</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-400">🇻🇪 → 🇪🇸</div>
                <div className="text-xs sm:text-sm text-gray-400">De Venezuela a España</div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#projects"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg text-sm sm:text-base transition-colors"
              >
                Ver proyectos →
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl flex items-center justify-center">
              <span className="text-7xl sm:text-8xl font-bold text-white/80 drop-shadow-lg">
                J
              </span>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg">
                <span className="text-xs font-medium text-gray-700">
                  📍 Zaragoza, España
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}