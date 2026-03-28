
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card"

interface CategoryCardProps {
  title: string;
  description: string;
  icon: string;
  image: string;
}

const CategoryCard = ({ title, description, icon, image }: CategoryCardProps) => {
  const navigate = useNavigate();
  
  const getRouteFromTitle = (title: string) => {
    const routes: { [key: string]: string } = {
      "Organização, Processo e Produtividade": "/organizacao-processo-produtividade",
      "Buscadores de IAs": "/buscadores-ias",
      "IAs de Códigos Abertos": "/ias-codigos-abertos",
      "Mídias Sociais": "/midias-sociais",
      "Buscadores de Interesses (Públicos)": "/buscadores-interesses",
      "Geradores de Mapas Mentais por IA": "/geradores-mapas-mentais",
      "Criação de Mapas Mentais": "/criacao-mapas-mentais",
      "Geradores de Apresentações": "/geradores-apresentacoes",
      "Inteligências Artificiais (geral)": "/inteligencias-artificiais",
      "Geradores de Nomes para Negócios": "/geradores-nomes-negocios",
      "Geradores de Logomarcas": "/geradores-logomarcas",
      "Paletas de Cores": "/paletas-cores",
      "Ferramentas de Textos": "/ferramentas-textos",
      "Bancos de Imagens": "/bancos-imagens",
      "Design Geral": "/design-geral",
      "Identidade de Marca": "/identidade-marca",
      "Design de Produtos com IA": "/design-produtos-ia",
      "Imagens de Produto por IA": "/imagens-produto-ia",
      "Geração de Imagens por Texto (Text-to-Image IA)": "/geracao-imagens-texto-ia",
      "Edição de Vídeos com IA": "/edicao-videos-ia",
      "Ferramentas de Vídeo": "/ferramentas-video",
      "Bancos de Vídeos": "/bancos-videos",
      "Ferramentas para Meta Ads": "/ferramentas-meta-ads",
      "Narração por IA": "/narracao-ia",
      "Geradores de Legendas": "/geradores-legendas",
      "E-mail Marketing com IA": "/email-marketing-ia",
      "SEO": "/seo",
      "Rastreamento de Eventos (Meta, Google Ads)": "/rastreamento-eventos",
      "Mockups": "/mockups",
      "Automações para Suporte": "/automacoes-suporte",
      "Trilha Sonora por IA": "/trilha-sonora-ia",
      "Músicas sem Direitos Autorais": "/musicas-sem-direitos-autorais",
      "Geração de Conteúdo com IA": "/geracao-conteudo-ia",
      "Transcrição de Áudio em Texto": "/transcricao-audio-texto",
      "Criação de SaaS por IA": "/criacao-saas-ia",
      "Mineração de Produtos e Ofertas": "/mineracao-produtos-ofertas",
      "Plataformas de Freelancers": "/plataformas-freelancers",
      "Marketplaces (Facebook, Google, TikTok)": "/marketplaces-facebook-google-tiktok",
      "Ferramentas de FaceSwap": "/ferramentas-faceswap",
      "Ferramentas de SMS": "/ferramentas-sms",
      "Baixadores Universais": "/baixadores-universais",
      "Criação de Sites por IA": "/criacao-sites-ia",
      "Shopify": "/shopify",
      "Ferramentas de Desenvolvimento": "/ferramentas-desenvolvimento",
      "Automação e Integração": "/automacao-integracao",
      "Bibliotecas de Componentes": "/bibliotecas-componentes",
      "Galerias de Inspiração & Dashboards": "/galerias-inspiracao",
    };
    
    return routes[title] || "/";
  };

  const route = getRouteFromTitle(title);

  return (
    <Card
      className="bg-zinc-900 border-zinc-800 overflow-hidden hover:border-zinc-700 transition-colors cursor-pointer"
      onClick={() => navigate(route)}
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg p-2">
          <span className="text-2xl">{icon}</span>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
