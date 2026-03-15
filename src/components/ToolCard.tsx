
import { useState } from 'react';
import { Heart, Play, Plus, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ToolCardProps {
  title: string;
  description: string;
  icon: string;
  category: string;
  isFavorited?: boolean;
  isNew?: boolean;
}

// Mapeamento de categorias para imagens temáticas
const getCategoryImage = (category: string) => {
  const categoryImages: { [key: string]: string } = {
    "Organização, Processo e Produtividade": "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=600&fit=crop",
    "Buscadores de IAs": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
    "IAs de Códigos Abertos": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=600&fit=crop",
    "Mídias Sociais": "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=600&fit=crop",
    "Buscadores de Interesses (Públicos)": "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=600&fit=crop",
    "Geradores de Mapas Mentais por IA": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=600&fit=crop",
    "Criação de Mapas Mentais": "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=600&fit=crop",
    "Geradores de Apresentações": "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=600&fit=crop",
    "Inteligências Artificiais (geral)": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
    "Geradores de Nomes para Negócios": "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=600&fit=crop",
    "Geradores de Logomarcas": "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=600&fit=crop",
    "Paletas de Cores": "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=600&fit=crop",
    "Ferramentas de Textos": "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=600&fit=crop",
    "Bancos de Imagens": "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=600&fit=crop",
    "Design Geral": "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=600&fit=crop",
    "Identidade de Marca": "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=600&fit=crop",
    "Design de Produtos com IA": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=600&fit=crop",
    "Imagens de Produto por IA": "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=600&fit=crop",
    "Geração de Imagens por Texto (Text-to-Image IA)": "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=600&fit=crop",
    "Edição de Vídeos com IA": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=600&fit=crop",
    "Ferramentas de Vídeo": "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=600&fit=crop",
    "Bancos de Vídeos": "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=600&fit=crop",
    "Ferramentas para Meta Ads": "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=600&fit=crop",
    "Narração por IA": "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=600&fit=crop",
    "Geradores de Legendas": "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=600&fit=crop",
    "E-mail Marketing com IA": "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=600&fit=crop",
    "SEO": "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=600&fit=crop",
    "Rastreamento de Eventos (Meta, Google Ads)": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=600&fit=crop",
    "Mockups": "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=600&fit=crop",
    "Automações para Suporte": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
    "Música por IA": "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=600&fit=crop",
    "Trilha Sonora por IA": "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=600&fit=crop",
    "Músicas sem Direitos Autorais": "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=600&fit=crop",
    "Geração de Conteúdo com IA": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=600&fit=crop",
    "Transcrição de Áudio em Texto": "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=600&fit=crop",
    "Mineração de Produtos e Ofertas": "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=600&fit=crop",
    "Plataformas de Freelancers": "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=600&fit=crop",
    "Marketplaces (Facebook, Google, TikTok)": "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=600&fit=crop",
    "Vozes Geradas por IA": "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=600&fit=crop",
    "Plugins para WordPress": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=600&fit=crop",
    "Ferramentas de FaceSwap": "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=600&fit=crop",
    "Ferramentas de SMS": "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=600&fit=crop",
    "Provadores de Roupas Virtuais": "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=600&fit=crop",
    "Baixadores Universais": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=600&fit=crop",
    "Criação de Sites por IA": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=600&fit=crop",
    "Criação de SaaS por IA": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
    "Ferramentas de Desenvolvimento": "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400&h=600&fit=crop",
    "Automação e Integração": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=600&fit=crop"
  };
  
  return categoryImages[category] || "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop";
};

const ToolCard = ({ title, description, icon, category, isFavorited = false, isNew = false }: ToolCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [favorited, setFavorited] = useState(isFavorited);

  const backgroundImage = getCategoryImage(category);

  return (
    <div 
      className="group relative min-w-[140px] w-[140px] h-[210px] transition-all duration-300 hover:scale-110 hover:z-10 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Card - Estilo cartaz de cinema */}
      <div className="w-full h-full overflow-hidden rounded-md relative shadow-lg">
        {/* Imagem de fundo */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        {/* Overlay gradient para melhor legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Ícone no centro */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl opacity-90 drop-shadow-lg">{icon}</span>
        </div>
        
        {/* Título na parte inferior */}
        <div className="absolute bottom-0 left-0 right-0 p-2">
          <h3 className="text-white font-semibold text-xs line-clamp-2 drop-shadow-lg">
            {title}
          </h3>
        </div>

        {/* Badge "NOVO" */}
        {isNew && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded">
            NOVO
          </div>
        )}

        {/* Hover overlay expandido - estilo Netflix */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/90 flex flex-col justify-between p-3 transition-all duration-300 z-20">
            <div>
              <h3 className="text-white font-bold text-sm mb-2">
                {title}
              </h3>
              <p className="text-gray-300 text-xs mb-3 line-clamp-4">
                {description}
              </p>
            </div>
            
            {/* Botões de ação */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <Button 
                  size="sm" 
                  className="bg-white text-black hover:bg-gray-200 rounded-full w-6 h-6 p-0"
                >
                  <Play className="w-3 h-3 fill-current" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFavorited(!favorited);
                  }}
                  className={`rounded-full w-6 h-6 p-0 border ${
                    favorited 
                      ? 'bg-white border-white text-black' 
                      : 'bg-transparent border-gray-400 text-white hover:border-white'
                  }`}
                >
                  {favorited ? (
                    <Heart className="w-3 h-3 fill-current" />
                  ) : (
                    <Plus className="w-3 h-3" />
                  )}
                </Button>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="rounded-full w-6 h-6 p-0 bg-transparent border-gray-400 text-white hover:border-white"
              >
                <ChevronDown className="w-3 h-3" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolCard;
