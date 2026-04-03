
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToolBlogCard from "@/components/ToolBlogCard";
import { repositoriosGithubTools } from "@/data/categories/repositorios-github";

const RepositoriosGithub = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              📦 Repositórios GitHub
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Coleção curada de repositórios open-source no GitHub. Frameworks, bibliotecas, ferramentas e projetos úteis para desenvolvedores e entusiastas de tecnologia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repositoriosGithubTools.map((tool, index) => (
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

export default RepositoriosGithub;
