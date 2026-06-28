'use client';

const testimonials = [
  {
    id: 1,
    name: 'Alejandro Martínez',
    role: 'CTO, TecnoSoluciones',
    text: 'Jean demostró un dominio excepcional de React y Next.js. Su capacidad para optimizar el rendimiento de nuestra aplicación redujo los tiempos de carga en un 40%. Sin duda, un desarrollador que marca la diferencia.',
  },
  {
    id: 2,
    name: 'Carolina Méndez',
    role: 'Product Manager, InnovaTech',
    text: 'Trabajar con Jean es garantía de calidad y compromiso. No solo entrega código limpio y bien documentado, sino que también aporta ideas que mejoran el producto final. Un profesional de 10.',
  },
  {
    id: 3,
    name: 'Roberto Sánchez',
    role: 'CEO, DevCorp',
    text: 'Jean fue clave en el desarrollo de nuestra plataforma principal. Su enfoque en la arquitectura de software y su capacidad para resolver problemas complejos nos permitió lanzar el proyecto a tiempo. Totalmente recomendable.',
  },
  {
    id: 4,
    name: 'Laura Fernández',
    role: 'Lead Developer, WebSolutions',
    text: 'He tenido el placer de colaborar con Jean en varios proyectos. Su conocimiento de TypeScript y su habilidad para mantener un código escalable son impresionantes. Es un gran compañero de equipo.',
  },
  {
    id: 5,
    name: 'Diego Ramírez',
    role: 'Director de Tecnología, DataFlow',
    text: 'Jean transformó nuestra aplicación legacy en una plataforma moderna y eficiente. Su experiencia en el ecosistema React y su capacidad para liderar el proceso de migración fueron fundamentales para el éxito del proyecto.',
  },
  {
    id: 6,
    name: 'Sofía Torres',
    role: 'Senior Software Engineer, CloudTech',
    text: 'Jean es de esos desarrolladores que entienden tanto el negocio como la tecnología. Su habilidad para traducir requisitos complejos en soluciones elegantes y su dedicación al código limpio lo convierten en un activo invaluable para cualquier equipo.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-mono text-blue-600 dark:text-blue-400 font-semibold">
            ✦ TESTIMONIOS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            Lo que dicen <span className="text-blue-600 dark:text-blue-400">de mí</span>
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Experiencias de personas que han trabajado conmigo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}