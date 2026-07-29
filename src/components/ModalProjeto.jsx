export default function ModalProjeto({
  aberto,
  fechar,
  projeto,
}) {
  // Se o modal estiver fechado
  // não renderiza nada
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

        <p>{projeto.descricao}</p>

        <h3>Tecnologias</h3>

        <ul>
          {projeto.tecnologias.map(
            (tech) => (
              <li key={tech}>
                {tech}
              </li>
            )
          )}
        </ul>

        <h3>Desafios Resolvidos</h3>

        <ul>
          {projeto.desafios.map(
            (item) => (
              <li key={item}>
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}