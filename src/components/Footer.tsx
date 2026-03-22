
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-700 mt-20">
      <div className="container mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Cérebro Digital</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Sua central definitiva de ferramentas de Inteligência Artificial e automações. 
              Explore soluções inovadoras para transformar seu trabalho.
            </p>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <div className="text-gray-300">
                <p>Rua Antônio Callado, 23</p>
                <p>Jardim Santa Marina</p>
                <p>Jacareí - SP</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Links Rápidos</h4>
            <div className="space-y-3">
              <Link 
                to="/" 
                className="block text-gray-300 hover:text-red-500 transition-colors"
              >
                Início
              </Link>
              <Link 
                to="/favoritos" 
                className="block text-gray-300 hover:text-red-500 transition-colors"
              >
                Favoritas
              </Link>
              <div className="text-gray-300">
                Novidades
                <span className="ml-2 w-2 h-2 bg-red-500 rounded-full inline-block animate-pulse"></span>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Políticas</h4>
            <div className="space-y-3">
              <Link 
                to="/privacy-policy" 
                className="block text-gray-300 hover:text-red-500 transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link 
                to="/terms-of-service" 
                className="block text-gray-300 hover:text-red-500 transition-colors"
              >
                Termos de Serviço
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 BORGES DIGITAIL LTDA
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                Cérebro Digital - Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
