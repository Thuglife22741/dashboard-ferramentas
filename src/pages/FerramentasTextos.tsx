
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';

const FerramentasTextos = () => {
  const tools = [
    {
      title: "Aithor AI",
      description: "Escreve textos e anúncios com IA",
      detailedDescription: "Aithor AI é uma ferramenta de inteligência artificial especializada em criar textos persuasivos e anúncios eficazes, oferecendo um período de teste gratuito para experimentar suas funcionalidades.",
      icon: "✍️",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop",
      link: "https://aithor.com/pt-br/special-offer?utm_source=opera&utm_campaign=brazil_startpage&utm_medium=pc-br-venturebuilder-aithor-sd-def",
      category: "Ferramentas de Textos",
      isNew: true
    },
    {
      title: "Copy.ai",
      description: "Plataforma de IA para resultados de marketing",
      detailedDescription: "Copy.ai é a única plataforma de IA especialmente desenvolvida para resultados, ajudando equipes de marketing a criar conteúdo persuasivo e de alta conversão.",
      icon: "📝",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      link: "https://www.copy.ai/",
      category: "Ferramentas de Textos"
    },
    {
      title: "Rytr.me",
      description: "Assistente de escrita com IA",
      detailedDescription: "Rytr é um gerador de conteúdo e assistente de escrita com IA que ajuda a criar textos de alta qualidade em diferentes formatos e estilos.",
      icon: "🖊️",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      link: "https://rytr.me/",
      category: "Ferramentas de Textos"
    },
    {
      title: "ShortlyAI",
      description: "Parceiro de escrita com IA",
      detailedDescription: "ShortlyAI é seu parceiro de escrita com inteligência artificial que ajuda a superar o bloqueio de escritor e criar conteúdo fluido e natural.",
      icon: "⚡",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
      link: "https://www.shortlyai.com/",
      category: "Ferramentas de Textos"
    },
    {
      title: "Jasper",
      description: "Copiloto de IA para equipes de marketing",
      detailedDescription: "Jasper é um copiloto de IA desenvolvido especialmente para equipes de marketing empresarial, oferecendo ferramentas avançadas para criação de conteúdo.",
      icon: "🚀",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      link: "https://www.jasper.ai/",
      category: "Ferramentas de Textos",
      isNew: true
    },
    {
      title: "Writer Access",
      description: "Redatores com inteligência de conteúdo",
      detailedDescription: "Writer Access oferece redatores profissionais com inteligência de conteúdo, proporcionando textos de alta qualidade com teste gratuito disponível.",
      icon: "👥",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      link: "https://www.writeraccess.com/br/trial/",
      category: "Ferramentas de Textos"
    },
    {
      title: "LanguageTool",
      description: "Ferramenta para revisão ortográfica",
      detailedDescription: "LanguageTool é uma ferramenta completa de revisão ortográfica e gramatical que verifica textos em português e outros idiomas com precisão.",
      icon: "📚",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      link: "https://languagetool.org/pt-BR",
      category: "Ferramentas de Textos"
    },
    {
      title: "Smodin.io",
      description: "Reescreva e reformule texto",
      detailedDescription: "Smodin.io permite reescrever, reformular ou alterar texto automaticamente, oferecendo paráfrase gratuita em português e outros idiomas.",
      icon: "🔄",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=300&fit=crop",
      link: "https://smodin.io/pt/automaticamente-reescreva-texto-em-portugues-gratuitamente",
      category: "Ferramentas de Textos"
    },
    {
      title: "Grammarly",
      description: "Assistência gratuita de escrita com IA",
      detailedDescription: "Grammarly oferece assistência gratuita de escrita com inteligência artificial, corrigindo gramática, ortografia e melhorando a clareza dos textos.",
      icon: "✅",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
      link: "https://www.grammarly.com/",
      category: "Ferramentas de Textos"
    },
    {
      title: "LogicBalls",
      description: "Gerador de headlines com IA",
      detailedDescription: "LogicBalls é uma ferramenta de copywriting com IA que ajuda a escrever as melhores cópias de marketing e conteúdo, incluindo headlines impactantes.",
      icon: "💡",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      link: "https://logicballs.com/",
      category: "Ferramentas de Textos"
    },
    {
      title: "Pink Fire",
      description: "Gerador de headlines especializado",
      detailedDescription: "Pink Fire oferece um gerador especializado de headlines que cria títulos impactantes e persuasivos para seus conteúdos e campanhas de marketing.",
      icon: "🔥",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
      link: "https://pinkfire.com.br/gerador-de-headlines/",
      category: "Ferramentas de Textos"
    },
    {
      title: "Reverso",
      description: "Tradução e dicionário grátis",
      detailedDescription: "Reverso oferece tradução gratuita de texto e funciona como dicionário online, suportando múltiplos idiomas com traduções precisas e contextuais.",
      icon: "🌍",
      image: "https://images.unsplash.com/photo-1494032136223-b989d3d4e02b?w=400&h=300&fit=crop",
      link: "https://www.reverso.net/tradução-texto",
      category: "Ferramentas de Textos"
    },
    {
      title: "DeepL Translate",
      description: "O tradutor mais preciso do mundo",
      detailedDescription: "DeepL Translate é reconhecido como o tradutor mais preciso do mundo, oferecendo traduções de alta qualidade com inteligência artificial avançada.",
      icon: "🎯",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      link: "https://www.deepl.com/en/translator#pt/es/",
      category: "Ferramentas de Textos",
      isNew: true
    },
    {
      title: "InverTexto",
      description: "Múltiplas ferramentas numa só",
      detailedDescription: "InverTexto.com oferece uma coleção completa de ferramentas e aplicativos online para manipulação e edição de texto, reunindo múltiplas funcionalidades em uma plataforma.",
      icon: "🛠️",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop",
      link: "https://www.invertexto.com/",
      category: "Ferramentas de Textos"
    },
    {
      title: "LightPDF",
      description: "IA que edita PDF de forma inteligente",
      detailedDescription: "LightPDF é uma ferramenta de IA para edição de PDFs que permite converter, editar, comprimir e manipular documentos PDF de forma rápida e inteligente. Suporta OCR e diversas funcionalidades avançadas.",
      icon: "📄",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop",
      link: "https://lightpdf.com/pt/",
      category: "Ferramentas de Textos",
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
              Ferramentas de Textos
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Descubra as melhores ferramentas para criação, edição, correção e otimização de textos. 
              Desde assistentes de escrita com IA até corretores ortográficos e tradutores profissionais.
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

export default FerramentasTextos;
