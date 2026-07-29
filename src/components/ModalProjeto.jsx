import { useState } from "react";

export default function ModalProjeto({
  aberto,
  fechar,
  projeto,
}) {

  const [zoom, setZoom] = useState(false);
  
  if (!aberto || !projeto) {
    return null;
  }

  return (
    <div
      className="modal-overlay"
      onClick={fechar}
    >
      <div
        className="modal-content"
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        <button
          className="modal-close"
          onClick={fechar}
        >
          ✕
        </button>

        <h2>{projeto.titulo}</h2>

        <div className="modal-techs">
          {projeto.tecnologias.map(
            (tech) => (
              <span
                key={tech}
                className="tech-badge"
              >
                {tech}
              </span>
            )
          )}
        </div>

        <img
            className={`modal-image ${
              zoom ? "zoomed" : ""
            }`}
            src={projeto.imagem}
            alt={projeto.titulo}
            onClick={() => setZoom(!zoom)}
          />  

        <p className="modal-descricao">
          {projeto.descricao}
        </p>

        <div className="info-grid">

          <div className="info-card">
            <h3>Funcionalidades</h3>

            <ul>
              {projeto.funcionalidades?.map(
                (item) => (
                  <li key={item}>
                    ✅ {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="info-card">
            <h3>Desafios Resolvidos</h3>

            <ul>
              {projeto.desafios.map(
                (item) => (
                  <li key={item}>
                    ✅ {item}
                  </li>
                )
              )}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}