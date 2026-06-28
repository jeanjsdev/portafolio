import { 
  FaLinkedinIn, 
  FaGithub, 
  FaTwitter, 
  FaInstagram, 
  FaTiktok,
  FaFacebook,
  FaYoutube,
  FaWhatsapp 
} from 'react-icons/fa';

import VisitCounter from './VisitCounter';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()} Jean Oropeza. Todos los derechos reservados.
        </p>
        <VisitCounter />
        <div className="flex items-center gap-5">
          <a
            href="https://wa.me/34642850020?text=Hola%20Jean%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-600 transition-all duration-300 hover:scale-110"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/jeanjsdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://github.com/jeanjsdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-900 transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://x.com/JeanJsDev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black transition-all duration-300 hover:scale-110"
            aria-label="Twitter / X"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.facebook.com/jeanjsdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-700 transition-all duration-300 hover:scale-110"
            aria-label="Facebook"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://www.youtube.com/@jeanjsdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-600 transition-all duration-300 hover:scale-110"
            aria-label="YouTube"
          >
            <FaYoutube size={20} />
          </a>
          <a
            href="https://instagram.com/jeanjsdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-600 transition-all duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://tiktok.com/@jeanjsdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black transition-all duration-300 hover:scale-110"
            aria-label="TikTok"
          >
            <FaTiktok size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}