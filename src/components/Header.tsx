
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchDialog from '@/components/SearchDialog';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-white">Cérebro Digital</h1>
            </Link>

            {/* Navigation - Centro */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Button asChild variant="ghost" className="text-white hover:text-red-500 transition-colors font-medium">
                <Link to="/">Início</Link>
              </Button>
              <Button asChild variant="ghost" className="text-white hover:text-red-500 transition-colors font-medium">
                <Link to="/favoritos">Favoritas</Link>
              </Button>
              <div className="relative">
                <Button variant="ghost" className="text-white hover:text-red-500 transition-colors font-medium">
                  Novidades
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                </Button>
              </div>
            </nav>

            {/* Actions - Direita */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                className="text-white hover:text-red-500"
              >
                <Search className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-red-500 hidden md:flex"
              >
                <Bell className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-red-500"
              >
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </>
  );
};

export default Header;
