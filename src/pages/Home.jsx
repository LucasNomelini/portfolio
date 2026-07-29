// Importa os componentes que serão exibidos na página
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsCards from "../components/StatsCards";
import ProjetoDestaque from "../components/ProjetoDestaque";
import Projetos from "../components/Projetos";
import Tecnologias from "../components/Tecnologias";
import Sobre from "../components/Sobre";
import Contato from "../components/Contato";

// Componente principal da Home
export default function Home() {
  return (
    <>
      {/* Barra superior */}
      <Navbar />

      {/* Apresentação principal */}
      <Hero />

      {/* Sobre mim, breve resumo*/}
      <Sobre />

      {/* Cards com informações rápidas */}
      <StatsCards />

      {/* Projetos de Destaques*/}
      <ProjetoDestaque />

      {/* Projetos*/}
      <Projetos />

      {/* Tecnologia usadas*/}
      <Tecnologias />

      {/* Formas de entrar em contato cmg*/}
      <Contato />
    </>
  );
}