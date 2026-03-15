import { Category } from '@/types';
import { organizacaoTools } from './categories/organizacao';
import { buscadoresIAsTools, buscadoresInteressesTools } from './categories/buscadores';
import { iasCódigosAbertosTools } from './categories/codigos-abertos';
import { midiasSociaisTools } from './categories/midias-sociais';
import { geradoresMapasMentaisTools, criacaoMapasMentaisTools } from './categories/mapas-mentais';
import { geradoresApresentacoesTools } from './categories/apresentacoes';
import { inteligenciasArtificiaisTools } from './categories/inteligencias-artificiais';
import { geradoresNomesNegociosTools } from './categories/negocios';
import { geradoresLogomarcasTools, paletasCoresTools, designGeralTools, identidadeMarcaTools, designProdutosIATools, imagensProdutoIATools, mockupsTools } from './categories/design';
import { ferramentasTextosTools, bancosImagensTools, geracaoImagensTextoIATools } from './categories/texto-imagem';
import { edicaoVideosIATools, ferramentasVideoTools, bancosVideosTools, narracaoIATools, geradoresLegendas } from './categories/video-audio';
import { ferramentasMetaAdsTools, emailMarketingIATools, seoTools, rastreamentoEventosTools } from './categories/marketing-seo';
import { automacoesSuporteTools, musicaIATools } from './categories/suporte-musica';
import { trilhaSonoraIATools } from './categories/trilha-sonora';
import { musicasSemDireitosAutoraisTools } from './categories/musicas-sem-direitos';
import { geracaoConteudoIATools } from './categories/geracao-conteudo';
import { transcricaoAudioTextoTools } from './categories/transcricao';
import { criacaoSaasIATools } from './categories/saas-ia';
import { mineracaoProdutosOfertasTools } from './categories/mineracao-produtos';
import { plataformasFreelancersTools } from './categories/plataformas-freelancers';
import { marketplacesTools } from './categories/marketplaces';
import { ferramentasFaceSwapTools } from './categories/faceswap';
import { ferramentasSMSTools } from './categories/sms';
import { baixadoresUniversaisTools } from './categories/baixadores-universais';
import { criacaoSitesIATools } from './categories/criacao-sites-ia';
import { shopifyTools } from './categories/shopify';
import { ferramentasDesenvolvimentoTools } from './categories/desenvolvimento';
import { automacaoIntegracaoTools } from './categories/automacao-integracao';

export const categoriesData: Category[] = [
  {
    title: "Organização, Processo e Produtividade",
    tools: organizacaoTools
  },
  {
    title: "Buscadores de IAs",
    tools: buscadoresIAsTools
  },
  {
    title: "IAs de Códigos Abertos",
    tools: iasCódigosAbertosTools
  },
  {
    title: "Mídias Sociais",
    tools: midiasSociaisTools
  },
  {
    title: "Buscadores de Interesses (Públicos)",
    tools: buscadoresInteressesTools
  },
  {
    title: "Geradores de Mapas Mentais por IA",
    tools: geradoresMapasMentaisTools
  },
  {
    title: "Criação de Mapas Mentais",
    tools: criacaoMapasMentaisTools
  },
  {
    title: "Geradores de Apresentações",
    tools: geradoresApresentacoesTools
  },
  {
    title: "Inteligências Artificiais (geral)",
    tools: inteligenciasArtificiaisTools
  },
  {
    title: "Geradores de Nomes para Negócios",
    tools: geradoresNomesNegociosTools
  },
  {
    title: "Geradores de Logomarcas",
    tools: geradoresLogomarcasTools
  },
  {
    title: "Paletas de Cores",
    tools: paletasCoresTools
  },
  {
    title: "Ferramentas de Textos",
    tools: ferramentasTextosTools
  },
  {
    title: "Bancos de Imagens",
    tools: bancosImagensTools
  },
  {
    title: "Design Geral",
    tools: designGeralTools
  },
  {
    title: "Identidade de Marca",
    tools: identidadeMarcaTools
  },
  {
    title: "Design de Produtos com IA",
    tools: designProdutosIATools
  },
  {
    title: "Imagens de Produto por IA",
    tools: imagensProdutoIATools
  },
  {
    title: "Geração de Imagens por Texto (Text-to-Image IA)",
    tools: geracaoImagensTextoIATools
  },
  {
    title: "Edição de Vídeos com IA",
    tools: edicaoVideosIATools
  },
  {
    title: "Ferramentas de Vídeo",
    tools: ferramentasVideoTools
  },
  {
    title: "Bancos de Vídeos",
    tools: bancosVideosTools
  },
  {
    title: "Ferramentas para Meta Ads",
    tools: ferramentasMetaAdsTools
  },
  {
    title: "Narração por IA",
    tools: narracaoIATools
  },
  {
    title: "Geradores de Legendas",
    tools: geradoresLegendas
  },
  {
    title: "E-mail Marketing com IA",
    tools: emailMarketingIATools
  },
  {
    title: "SEO",
    tools: seoTools
  },
  {
    title: "Rastreamento de Eventos (Meta, Google Ads)",
    tools: rastreamentoEventosTools
  },
  {
    title: "Mockups",
    tools: mockupsTools
  },
  {
    title: "Automações para Suporte",
    tools: automacoesSuporteTools
  },
  {
    title: "Trilha Sonora por IA",
    tools: trilhaSonoraIATools
  },
  {
    title: "Músicas sem Direitos Autorais",
    tools: musicasSemDireitosAutoraisTools
  },
  {
    title: "Geração de Conteúdo com IA",
    tools: geracaoConteudoIATools
  },
  {
    title: "Transcrição de Áudio em Texto",
    tools: transcricaoAudioTextoTools
  },
  {
    title: "Criação de SaaS por IA",
    tools: criacaoSaasIATools
  },
  {
    title: "Mineração de Produtos e Ofertas",
    tools: mineracaoProdutosOfertasTools
  },
  {
    title: "Plataformas de Freelancers",
    tools: plataformasFreelancersTools
  },
  {
    title: "Marketplaces (Facebook, Google, TikTok)",
    tools: marketplacesTools
  },
  {
    title: "Ferramentas de FaceSwap",
    tools: ferramentasFaceSwapTools
  },
  {
    title: "Ferramentas de SMS",
    tools: ferramentasSMSTools
  },
  {
    title: "Baixadores Universais",
    tools: baixadoresUniversaisTools
  },
  {
    title: "Criação de Sites por IA",
    tools: criacaoSitesIATools
  },
  {
    title: "Shopify",
    tools: shopifyTools
  },
  {
    title: "Ferramentas de Desenvolvimento",
    tools: ferramentasDesenvolvimentoTools
  },
  {
    title: "Automação e Integração",
    tools: automacaoIntegracaoTools
  }
];
