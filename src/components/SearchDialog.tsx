import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { categoriesData as toolCategories } from '@/data/toolsData';

interface SearchResult {
  toolTitle: string;
  toolDescription: string;
  toolIcon: string;
  toolLink?: string;
  categoryTitle: string;
  categoryRoute: string;
}

const categoryRoutes: Record<string, string> = {
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

// Build flat search index once
const allTools: SearchResult[] = toolCategories.flatMap((cat) =>
  cat.tools.map((tool) => ({
    toolTitle: tool.title,
    toolDescription: tool.description,
    toolIcon: tool.icon,
    toolLink: tool.link,
    categoryTitle: cat.title,
    categoryRoute: categoryRoutes[cat.title] || "/",
  }))
);

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  // Keyboard shortcut Ctrl+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onOpenChange(true);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onOpenChange]);

  const normalize = (str: string) =>
    str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const results = useMemo(() => {
    if (query.trim().length < 2) return [];
    const terms = normalize(query).split(/\s+/).filter(Boolean);
    return allTools.filter((item) => {
      const haystack = normalize(
        `${item.toolTitle} ${item.toolDescription} ${item.categoryTitle}`
      );
      return terms.every((term) => haystack.includes(term));
    }).slice(0, 20);
  }, [query]);

  const handleSelect = (result: SearchResult) => {
    onOpenChange(false);
    if (result.toolLink) {
      window.open(result.toolLink, '_blank');
    } else {
      navigate(result.categoryRoute);
    }
  };

  const handleGoToCategory = (route: string) => {
    onOpenChange(false);
    navigate(route);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zinc-900 border-zinc-700 p-0 max-w-2xl gap-0 [&>button]:hidden">
        <div className="flex items-center border-b border-zinc-700 px-4">
          <Search className="w-5 h-5 text-zinc-400 shrink-0" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar ferramentas, categorias, palavras-chave..."
            className="border-0 bg-transparent text-white placeholder-zinc-500 focus-visible:ring-0 focus-visible:ring-offset-0 h-14 text-base"
            autoFocus
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-zinc-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {query.trim().length < 2 ? (
            <div className="p-8 text-center text-zinc-500 text-sm">
              Digite pelo menos 2 caracteres para buscar...
              <div className="mt-2 text-xs text-zinc-600">
                Dica: use <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded text-zinc-400">Ctrl+K</kbd> para abrir a busca rapidamente
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-zinc-500 text-sm">
              Nenhum resultado encontrado para "<span className="text-zinc-300">{query}</span>"
            </div>
          ) : (
            <div className="p-2">
              <div className="px-3 py-2 text-xs text-zinc-500 font-medium">
                {results.length} resultado{results.length !== 1 ? 's' : ''} encontrado{results.length !== 1 ? 's' : ''}
              </div>
              {results.map((result, i) => (
                <button
                  key={`${result.toolTitle}-${i}`}
                  onClick={() => handleSelect(result)}
                  className="w-full flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-zinc-800 transition-colors text-left group"
                >
                  <span className="text-2xl shrink-0 mt-0.5">{result.toolIcon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium truncate">{result.toolTitle}</span>
                      {result.toolLink && (
                        <ExternalLink className="w-3.5 h-3.5 text-zinc-500 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                    <p className="text-zinc-400 text-sm truncate">{result.toolDescription}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleGoToCategory(result.categoryRoute);
                      }}
                      className="text-xs text-red-500 hover:text-red-400 mt-1"
                    >
                      {result.categoryTitle}
                    </button>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
