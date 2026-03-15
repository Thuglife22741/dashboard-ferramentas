
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import Index from "./pages/Index";
import OrganizacaoProcessoProdutividade from "./pages/OrganizacaoProcessoProdutividade";
import BuscadoresIAs from "./pages/BuscadoresIAs";
import IAsCódigosAbertos from "./pages/IAsCódigosAbertos";
import MidiasSociais from "./pages/MidiasSociais";
import BuscadoresInteresses from "./pages/BuscadoresInteresses";
import GeradoresMapasMentais from "./pages/GeradoresMapasMentais";
import CriacaoMapasMentais from "./pages/CriacaoMapasMentais";
import GeradoresApresentacoes from "./pages/GeradoresApresentacoes";
import Favoritos from "./pages/Favoritos";
import NotFound from "./pages/NotFound";
import InteligenciasArtificiais from "./pages/InteligenciasArtificiais";
import GeradoresNomesNegocios from "./pages/GeradoresNomesNegocios";
import GeradoresLogomarcas from "./pages/GeradoresLogomarcas";
import PaletasCores from "./pages/PaletasCores";
import FerramentasTextos from "./pages/FerramentasTextos";
import BancosImagens from "./pages/BancosImagens";
import DesignGeral from "./pages/DesignGeral";
import IdentidadeMarca from "./pages/IdentidadeMarca";
import DesignProdutosIA from "./pages/DesignProdutosIA";
import ImagensProdutoIA from "./pages/ImagensProdutoIA";
import GeracaoImagensTextoIA from "./pages/GeracaoImagensTextoIA";
import EdicaoVideosIA from "./pages/EdicaoVideosIA";
import FerramentasVideo from "./pages/FerramentasVideo";
import BancosVideos from "./pages/BancosVideos";
import FerramentasMetaAds from "./pages/FerramentasMetaAds";
import NarracaoIA from "./pages/NarracaoIA";
import GeradoresLegendas from "./pages/GeradoresLegendas";
import EmailMarketingIA from "./pages/EmailMarketingIA";
import SEO from "./pages/SEO";
import RastreamentoEventos from "./pages/RastreamentoEventos";
import Mockups from "./pages/Mockups";
import AutomacoesSuporte from "./pages/AutomacoesSuporte";
import TrilhaSonoraIA from "./pages/TrilhaSonoraIA";
import MusicasSemDireitosAutorais from "./pages/MusicasSemDireitosAutorais";
import GeracaoConteudoIA from "./pages/GeracaoConteudoIA";
import TranscricaoAudioTexto from "./pages/TranscricaoAudioTexto";
import CriacaoSaasIA from "./pages/CriacaoSaasIA";
import MineracaoProdutosOfertas from "./pages/MineracaoProdutosOfertas";
import PlataformasFreelancers from "./pages/PlataformasFreelancers";
import MarketplacesFacebookGoogleTikTok from "./pages/MarketplacesFacebookGoogleTikTok";
import FerramentasFaceSwap from "./pages/FerramentasFaceSwap";
import FerramentasSMS from "./pages/FerramentasSMS";
import BaixadoresUniversais from "./pages/BaixadoresUniversais";
import CriacaoSitesIA from "./pages/CriacaoSitesIA";
import Shopify from "./pages/Shopify";
import FerramentasDesenvolvimento from "./pages/FerramentasDesenvolvimento";
import AutomacaoIntegracao from "./pages/AutomacaoIntegracao";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <FavoritesProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/organizacao-processo-produtividade" element={<OrganizacaoProcessoProdutividade />} />
            <Route path="/buscadores-ias" element={<BuscadoresIAs />} />
            <Route path="/ias-codigos-abertos" element={<IAsCódigosAbertos />} />
            <Route path="/midias-sociais" element={<MidiasSociais />} />
            <Route path="/buscadores-interesses" element={<BuscadoresInteresses />} />
            <Route path="/geradores-mapas-mentais" element={<GeradoresMapasMentais />} />
            <Route path="/criacao-mapas-mentais" element={<CriacaoMapasMentais />} />
            <Route path="/geradores-apresentacoes" element={<GeradoresApresentacoes />} />
            <Route path="/inteligencias-artificiais" element={<InteligenciasArtificiais />} />
            <Route path="/geradores-nomes-negocios" element={<GeradoresNomesNegocios />} />
            <Route path="/geradores-logomarcas" element={<GeradoresLogomarcas />} />
            <Route path="/paletas-cores" element={<PaletasCores />} />
            <Route path="/ferramentas-textos" element={<FerramentasTextos />} />
            <Route path="/bancos-imagens" element={<BancosImagens />} />
            <Route path="/design-geral" element={<DesignGeral />} />
            <Route path="/identidade-marca" element={<IdentidadeMarca />} />
            <Route path="/design-produtos-ia" element={<DesignProdutosIA />} />
            <Route path="/imagens-produto-ia" element={<ImagensProdutoIA />} />
            <Route path="/geracao-imagens-texto-ia" element={<GeracaoImagensTextoIA />} />
            <Route path="/edicao-videos-ia" element={<EdicaoVideosIA />} />
            <Route path="/ferramentas-video" element={<FerramentasVideo />} />
            <Route path="/bancos-videos" element={<BancosVideos />} />
            <Route path="/ferramentas-meta-ads" element={<FerramentasMetaAds />} />
            <Route path="/narracao-ia" element={<NarracaoIA />} />
            <Route path="/geradores-legendas" element={<GeradoresLegendas />} />
            <Route path="/email-marketing-ia" element={<EmailMarketingIA />} />
            <Route path="/seo" element={<SEO />} />
            <Route path="/rastreamento-eventos" element={<RastreamentoEventos />} />
            <Route path="/mockups" element={<Mockups />} />
            <Route path="/automacoes-suporte" element={<AutomacoesSuporte />} />
            <Route path="/trilha-sonora-ia" element={<TrilhaSonoraIA />} />
            <Route path="/musicas-sem-direitos-autorais" element={<MusicasSemDireitosAutorais />} />
            <Route path="/geracao-conteudo-ia" element={<GeracaoConteudoIA />} />
            <Route path="/transcricao-audio-texto" element={<TranscricaoAudioTexto />} />
            <Route path="/criacao-saas-ia" element={<CriacaoSaasIA />} />
            <Route path="/mineracao-produtos-ofertas" element={<MineracaoProdutosOfertas />} />
            <Route path="/plataformas-freelancers" element={<PlataformasFreelancers />} />
            <Route path="/marketplaces-facebook-google-tiktok" element={<MarketplacesFacebookGoogleTikTok />} />
            <Route path="/ferramentas-faceswap" element={<FerramentasFaceSwap />} />
            <Route path="/ferramentas-sms" element={<FerramentasSMS />} />
            <Route path="/baixadores-universais" element={<BaixadoresUniversais />} />
            <Route path="/criacao-sites-ia" element={<CriacaoSitesIA />} />
            <Route path="/shopify" element={<Shopify />} />
            <Route path="/ferramentas-desenvolvimento" element={<FerramentasDesenvolvimento />} />
            <Route path="/automacao-integracao" element={<AutomacaoIntegracao />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </FavoritesProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
