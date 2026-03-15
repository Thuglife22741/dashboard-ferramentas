import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';

const BuscadoresIAs = () => {
  const toolsData = [
    {
      title: "Powerful AI Tools",
      description: "Diretório mundial das melhores ferramentas de IA organizadas por categoria e preço.",
      detailedDescription: "O World's Largest AI Tool Directory é uma plataforma abrangente que cataloga milhares de ferramentas de inteligência artificial. Com filtros por categoria, preço e funcionalidade, facilita a descoberta de soluções AI para diferentes necessidades. Inclui tanto ferramentas gratuitas quanto premium, com descrições detalhadas, avaliações da comunidade e links diretos para acesso.",
      icon: "🔍",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      link: "https://www.powerfulai.tools/?filter=Free",
      isNew: true
    },
    {
      title: "Futurepedia",
      description: "Encontre as melhores ferramentas e software de IA com curadoria especializada.",
      detailedDescription: "Futurepedia é uma plataforma curada que apresenta as melhores ferramentas de IA do mercado. Com foco na qualidade sobre quantidade, oferece análises detalhadas, comparações lado a lado e recomendações personalizadas. A plataforma é atualizada diariamente com novas ferramentas e inclui categorias como produtividade, criação de conteúdo, análise de dados e muito mais.",
      icon: "🔮",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      link: "https://www.futurepedia.io/"
    },
    {
      title: "There's An AI For That",
      description: "Localiza todas as IAs disponíveis para qualquer tarefa ou necessidade específica.",
      detailedDescription: "There's An AI For That é o buscador definitivo de ferramentas de inteligência artificial. Com uma interface simples e intuitiva, permite encontrar rapidamente a ferramenta de IA perfeita para qualquer tarefa. O site é atualizado constantemente com as últimas inovações em IA e oferece filtros por função, indústria e tipo de ferramenta. Ideal para profissionais que precisam de soluções específicas de IA.",
      icon: "🎯",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop",
      link: "https://theresanaiforthat.com/",
      isNew: true
    },
    {
      title: "Hugging Face",
      description: "Plataforma líder em modelos de IA open source e machine learning colaborativo.",
      detailedDescription: "Hugging Face é a principal plataforma para descobrir, usar e contribuir com modelos de inteligência artificial open source. Oferece milhares de modelos pré-treinados para processamento de linguagem natural, visão computacional e áudio. A plataforma inclui ferramentas para fine-tuning, hospedagem de modelos, datasets e uma comunidade ativa de desenvolvedores e pesquisadores de IA.",
      icon: "🤗",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      link: "https://huggingface.co/"
    },
    {
      title: "The AI Bucket",
      description: "Site completo com várias ferramentas de IAs organizadas por categoria.",
      detailedDescription: "The AI Bucket é um diretório abrangente que reúne diversas ferramentas de inteligência artificial organizadas por categoria. Uma referência completa para encontrar soluções de IA para qualquer necessidade, desde geração de conteúdo até automação de processos.",
      icon: "🪣",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      link: "https://theaibucket.com/",
      isNew: true
    },
    {
      title: "Toolify",
      description: "Diretório completo com todas as ferramentas de inteligência artificial do mercado.",
      detailedDescription: "Toolify é um dos maiores diretórios de ferramentas de IA do mundo, catalogando milhares de soluções de inteligência artificial. Com filtros avançados por categoria, preço e funcionalidade, facilita a descoberta da ferramenta perfeita para qualquer projeto.",
      icon: "🧰",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      link: "https://www.toolify.ai/",
      isNew: true
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-center">
            Buscadores de IAs
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed text-center mb-8">
            Descubra os melhores diretórios e buscadores de ferramentas de Inteligência Artificial. 
            Estes recursos especializados ajudam você a encontrar rapidamente a IA perfeita para qualquer necessidade ou projeto.
          </p>
        </div>
      </section>

      {/* Tools Blog Section */}
      <main className="pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolsData.map((tool, index) => (
              <ToolBlogCard
                key={index}
                title={tool.title}
                description={tool.description}
                detailedDescription={tool.detailedDescription}
                icon={tool.icon}
                image={tool.image}
                link={tool.link}
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

export default BuscadoresIAs;
