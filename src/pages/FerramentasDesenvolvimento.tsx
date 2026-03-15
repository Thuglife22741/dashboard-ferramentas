
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';
import { ferramentasDesenvolvimentoTools } from '@/data/categories/desenvolvimento';

const FerramentasDesenvolvimento = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <section className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            🛠️ Ferramentas de Desenvolvimento
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Ferramentas essenciais para desenvolvedores: clientes SSH, validadores, conversores, bibliotecas de componentes e hospedagem DNS.
          </p>
        </div>
      </section>

      <main className="px-4 md:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ferramentasDesenvolvimentoTools.map((tool, index) => (
              <ToolBlogCard
                key={index}
                title={tool.title}
                description={tool.description}
                detailedDescription={tool.detailedDescription}
                icon={tool.icon}
                image={tool.image}
                link={tool.link}
                category="Ferramentas de Desenvolvimento"
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

export default FerramentasDesenvolvimento;
