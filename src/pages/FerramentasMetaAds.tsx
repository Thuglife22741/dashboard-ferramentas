
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';

const FerramentasMetaAds = () => {
  const tools = [
    {
      title: "AdsPower",
      description: "Navegador antidetecção para gerenciamento de múltiplas contas",
      detailedDescription: "AdsPower é o navegador antidetecção #1 do mundo para gerenciamento de múltiplas contas. Permite criar perfis únicos de navegador para cada conta, evitando detecção e banimentos.",
      icon: "🔒",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      link: "https://www.adspower.com/",
      category: "Ferramentas para Meta Ads",
      isNew: true
    },
    {
      title: "Dolphin Anty",
      description: "Navegador antidetecção para milhares de contas online",
      detailedDescription: "Dolphin é um navegador antidetecção que permite gerenciar milhares de contas online com perfis virtuais seguros. Ideal para marketing digital e gestão de múltiplas contas.",
      icon: "🐬",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      link: "https://dolphin-anty.com/en/",
      category: "Ferramentas para Meta Ads"
    },
    {
      title: "Incogniton",
      description: "Navegador antidetecção para gerenciamento de várias contas",
      detailedDescription: "Incogniton oferece navegação anônima e segura para gerenciar múltiplas contas online. Protege sua identidade digital e evita detecção por plataformas.",
      icon: "👤",
      image: "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?w=400&h=300&fit=crop",
      link: "https://incogniton.com/pt-br/",
      category: "Ferramentas para Meta Ads"
    },
    {
      title: "GoLogin",
      description: "Navegador antidetecção para múltiplas contas - Teste grátis",
      detailedDescription: "GoLogin é um navegador antidetecção que permite criar e gerenciar múltiplas contas com segurança. Oferece teste gratuito e recursos avançados de proteção.",
      icon: "🚀",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      link: "https://gologin.com/",
      category: "Ferramentas para Meta Ads"
    },
    {
      title: "Octobrowser",
      description: "O melhor navegador multicontas. Seguro e rápido",
      detailedDescription: "Octobrowser é uma solução premium para gerenciamento de múltiplas contas online. Oferece velocidade, segurança e recursos avançados para profissionais de marketing.",
      icon: "🐙",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
      link: "https://octobrowser.net/pt/",
      category: "Ferramentas para Meta Ads"
    },
    {
      title: "Madgicx AI Marketer",
      description: "Automação inteligente para anúncios Meta",
      detailedDescription: "Madgicx AI Marketer oferece automação avançada para campanhas Meta Ads usando inteligência artificial. Otimiza automaticamente seus anúncios para máximo ROI.",
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      link: "https://madgicx.com/ai-marketer",
      category: "Ferramentas para Meta Ads",
      isNew: true
    },
    {
      title: "Shown.io",
      description: "Otimização de anúncios com tecnologia de IA",
      detailedDescription: "Shown.io utiliza IA para otimizar automaticamente seus anúncios Meta. Analisa performance em tempo real e ajusta campanhas para melhor resultado.",
      icon: "📊",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      link: "https://shown.io/pt",
      category: "Ferramentas para Meta Ads"
    },
    {
      title: "Princípio 80x10x10",
      description: "Simulação em tempo real para campanhas",
      detailedDescription: "App baseado no princípio 80x10x10 que oferece simulação em tempo real para otimização de campanhas Meta Ads. Ajuda a prever resultados e ajustar estratégias.",
      icon: "⚡",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      link: "https://801010.app/",
      category: "Ferramentas para Meta Ads"
    },
    {
      title: "AdEspresso",
      description: "Publicidade digital fácil, rápida e efetiva",
      detailedDescription: "AdEspresso simplifica a criação e gestão de campanhas publicitárias. Oferece ferramentas intuitivas para criar, testar e otimizar anúncios em múltiplas plataformas.",
      icon: "☕",
      image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=400&h=300&fit=crop",
      link: "https://adespresso.com/",
      category: "Ferramentas para Meta Ads"
    },
    {
      title: "Bïrch (Revealbot)",
      description: "Automatize suas estratégias de anúncios",
      detailedDescription: "Bïrch automatiza suas estratégias de anúncios Meta com regras personalizadas e otimização inteligente. Economiza tempo e melhora performance das campanhas.",
      icon: "🌲",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      link: "https://bir.ch/",
      category: "Ferramentas para Meta Ads"
    },
    {
      title: "Ahrefs Backlink Checker",
      description: "Verificador gratuito de backlinks",
      detailedDescription: "Ferramenta gratuita da Ahrefs para verificar backlinks de qualquer site. Essencial para análise de concorrência e investigação de URLs em campanhas Meta.",
      icon: "🔗",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&h=300&fit=crop",
      link: "https://ahrefs.com/backlink-checker",
      category: "Ferramentas para Meta Ads"
    },
    {
      title: "WeTracked.io",
      description: "Solução #1 de rastreamento de anúncios para Shopify",
      detailedDescription: "WeTracked.io é a principal solução de tracking para Shopify. Oferece rastreamento preciso de conversões e ROI para campanhas Meta Ads em e-commerce.",
      icon: "📈",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      link: "https://www.wetracked.io/",
      category: "Ferramentas para Meta Ads",
      isNew: true
    },
    {
      title: "Meta Status",
      description: "Verifique o status dos produtos Meta Business",
      detailedDescription: "Meta Status permite verificar em tempo real o status e interrupções dos produtos Meta Business, incluindo Gerenciador de Anúncios, Facebook e Instagram.",
      icon: "📡",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      link: "https://metastatus.com/",
      category: "Ferramentas para Meta Ads"
    },
    {
      title: "Smartproxy",
      description: "Proxies americanos para Meta Ads",
      detailedDescription: "Smartproxy oferece proxies premium americanos essenciais para gerenciar múltiplas contas Meta Ads com segurança e evitar bloqueios geográficos.",
      icon: "🌐",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop",
      link: "https://dashboard.smartproxy.com/",
      category: "Ferramentas para Meta Ads"
    },
    {
      title: "Metricool",
      description: "Analise, gerencie e meça seu conteúdo digital",
      detailedDescription: "Metricool é uma plataforma completa para análise e gestão de redes sociais. Oferece métricas detalhadas, agendamento de posts e relatórios para Meta Ads.",
      icon: "📊",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      link: "https://metricool.com/",
      category: "Ferramentas para Meta Ads"
    },
    {
      title: "ManyChat",
      description: "Chat Marketing facilitado para Meta",
      detailedDescription: "ManyChat automatiza conversas no Facebook Messenger e Instagram. Cria funis de vendas automatizados e chatbots inteligentes para suas campanhas Meta.",
      icon: "💬",
      image: "https://images.unsplash.com/photo-1553028826-f4804151e4cd?w=400&h=300&fit=crop",
      link: "https://manychat.com/",
      category: "Ferramentas para Meta Ads"
    },
    {
      title: "Buscador de Interesses Facebook",
      description: "Ferramenta gratuita para encontrar interesses",
      detailedDescription: "Buscador gratuito de interesses para segmentação no Facebook Ads. Encontre interesses relevantes para sua audiência e melhore o targeting das suas campanhas.",
      icon: "🎯",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      link: "https://materiais.semcodar.com.br/facebook_interests",
      category: "Ferramentas para Meta Ads"
    },
    {
      title: "Generated Photos",
      description: "Gerador de fotos fake para perfis",
      detailedDescription: "Generated Photos cria fotos realistas de pessoas que não existem usando IA. Útil para criar perfis e criativos para testes em campanhas Meta Ads.",
      icon: "📸",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      link: "https://generated.photos/",
      category: "Ferramentas para Meta Ads"
    },
    {
      title: "Ad Creative Bank",
      description: "Banco de criativos para inspiração",
      detailedDescription: "Ad Creative Bank é uma biblioteca com milhares de exemplos de criativos de anúncios. Inspire-se com campanhas de sucesso para criar seus próprios anúncios Meta.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      link: "https://www.theadcreativebank.com/",
      category: "Ferramentas para Meta Ads"
    },
    {
      title: "Tintim",
      description: "CRM de conversão de eventos para WhatsApp",
      detailedDescription: "Tintim rastreia vendas de campanhas WhatsApp e integra com Meta Ads. Permite acompanhar toda jornada do cliente desde o anúncio até a conversão no WhatsApp.",
      icon: "📱",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
      link: "https://tintim.app/",
      category: "Ferramentas para Meta Ads",
      isNew: true
    },
    {
      title: "Denote",
      description: "Extensão para salvar anúncios do TikTok, Facebook e mais",
      detailedDescription: "Denote é uma extensão de navegador essencial para profissionais de marketing que permite salvar e organizar anúncios de diferentes plataformas como TikTok, Facebook e Google Ads. Facilita a análise competitiva e inspiração criativa.",
      icon: "📌",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
      link: "https://chromewebstore.google.com/detail/denote-save-ads-tk-fb-ad/okieokifcnnigcgceookjighhplbhcip?hl=en&utm_source=dn_chrome_extension",
      category: "Ferramentas para Meta Ads",
      isNew: true
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ferramentas para Meta Ads
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Conjunto completo de ferramentas especializadas para otimizar suas campanhas Meta Ads. 
              Desde navegadores antidetecção até automação e análise de performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <ToolBlogCard
                key={index}
                title={tool.title}
                description={tool.description}
                detailedDescription={tool.detailedDescription}
                icon={tool.icon}
                image={tool.image}
                link={tool.link}
                category={tool.category}
                isNew={tool.isNew}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FerramentasMetaAds;
