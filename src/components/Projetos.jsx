import { useState } from "react";

import ProjetoCard from "./ProjetoCard";
import ModalProjeto from "./ModalProjeto";
import financeiroImg from "../assets/projetos/financeiro-dashboard.png";
import manicureImg from "../assets/projetos/manicure-relatorios.png";
import confeitariaImg from "../assets/projetos/confeitaria-home.png";
import {
  Wallet,
  CalendarDays,
  Store
} from "lucide-react";

export default function Projetos() {

  const [projetoAtual, setProjetoAtual] =
    useState(null);

  const projetos = [
    {
      titulo: "Plataforma de Gestão Financeira",
      imagem: financeiroImg,

      descricao:
        "Controle financeiro completo com dashboard, investimentos e gestão de empréstimos.",

      tecnologias: [
        "React",
        "Firebase",
        "Firestore",
        "JavaScript",
      ],

      desafios: [
        "Parcelamentos automáticos",
        "Dashboard consolidado",
        "Gestão financeira compartilhada",
      ],

      funcionalidades: [
        "Dashboard Financeiro",
        "Gestão de Investimentos",
        "Gestão de Empréstimos",
        "Controle Compartilhado",
        "Relatórios Mensais",
      ],
    },

    {
      titulo: "Sistema de Agendamento",
      imagem: manicureImg,

      descricao:
        "Gestão de agendamentos e controle financeiro.",

      tecnologias: [
        "React",
        "Firebase",
        "JavaScript",
      ],

      desafios: [
        "Controle de horários",
        "Cadastro de clientes",
      ],

      funcionalidades: [
        "Agendamentos",
        "Controle Financeiro",
        "Relatórios",
        "Controle de Gastos",
        "Ticket Médio",
      ],
    },

    {
      titulo: "Cardápio Digital",
      imagem: confeitariaImg,

      descricao:
        "Cardápio online com login, senha e área administrativa.",

      tecnologias: [
        "React",
        "Firebase",
        "JavaScript",
      ],

      desafios: [
        "Login administrativo",
        "Gestão de produtos",
      ],

      funcionalidades: [
        "Cardápio Online",
        "Área Administrativa",
        "Cadastro de Produtos",
        "Integração WhatsApp",
        "Gestão de Catálogo",
      ],
    },
  ];

  return (
    <section id="projetos" className="projetos">

      <h2>Projetos</h2>

      <div className="projetos-grid">

        {projetos.map((projeto) => (

          <ProjetoCard
            imagem={projeto.imagem}
            key={projeto.titulo}
            titulo={projeto.titulo}
            tecnologias={projeto.tecnologias}
            descricao={projeto.descricao}

            onClick={() =>
              setProjetoAtual(
                projeto
              )
            }
          />

        ))}

      </div>

      <ModalProjeto
        aberto={
          projetoAtual !== null
        }

        projeto={projetoAtual}

        fechar={() =>
          setProjetoAtual(null)
        }
      />

    </section>
  );
}