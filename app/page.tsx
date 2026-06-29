import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
// import Testimonials from './components/Testimonials'; // ← COMENTADO
import ScrollReveal from './components/ScrollReveal';

export default function Home() {
  return (
    <main>
      <Header />
      
      <Hero />
      
      <ScrollReveal delay={100} threshold={0.2}>
        <About />
      </ScrollReveal>
      
      <ScrollReveal delay={100} threshold={0.2}>
        <Skills />
      </ScrollReveal>
      
      <ScrollReveal delay={150} threshold={0.2}>
        <Projects />
      </ScrollReveal>
      
      {/* <Testimonials /> ← COMENTADO */}  
      
      <ScrollReveal delay={200} threshold={0.2}>
        <Contact />
      </ScrollReveal>
      
      <Footer />
      <ScrollToTop />
    </main>
  );
}