import { useState } from "react";

import ProjetoCard from "./ProjetoCard";
import ModalProjeto from "./ModalProjeto";

export default function Projetos() {

  const [projetoAtual, setProjetoAtual] =
    useState(null);

  const projetos = [
    {
      titulo: "Sistema Financeiro",
      icone: "💰",

      descricao:
        "Controle financeiro completo com dashboard, investimentos e gestão de empréstimos.",

      tecnologias: [
        "React",
        "Firebase",
        "Firestore",
      ],

      desafios: [
        "Parcelamentos automáticos",
        "Dashboard consolidado",
        "Gestão financeira compartilhada",
      ],
    },

    {
      titulo: "Sistema de Agendamento",

      icone: "💅",

      descricao:
        "Gestão de agendamentos e controle financeiro.",

      tecnologias: [
        "React",
        "Firebase",
      ],

      desafios: [
        "Controle de horários",
        "Cadastro de clientes",
      ],
    },

    {
      titulo: "Cardápio Digital",

      icone: "🍔",

      descricao:
        "Cardápio online com área administrativa.",

      tecnologias: [
        "React",
        "Firebase",
      ],

      desafios: [
        "Login administrativo",
        "Gestão de produtos",
      ],
    },
  ];

  return (
    <section id="projetos" className="projetos">

      <h2>Projetos</h2>

      <div className="projetos-grid">

        {projetos.map((projeto) => (

          <ProjetoCard
            key={projeto.titulo}
            icone={projeto.icone}
            titulo={projeto.titulo}
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