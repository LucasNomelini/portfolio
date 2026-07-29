export default function ProjetoCard({
  titulo,
  descricao,
  tecnologias,
  onClick,
}) {
  return (
    <div className="projeto-card">

      <h3>{titulo}</h3>

        <div className="projeto-techs">
          {tecnologias.map((tech) => (
            <span
              key={tech}
              className="card-tech"
              >
                {tech}
          </span>
          ))}
        </div>

      <p>{descricao}</p>

      <button onClick={onClick}>
        Ver Projeto
      </button>

    </div>
  );
}