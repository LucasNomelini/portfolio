export default function ProjetoCard({
  icone,
  titulo,
  descricao,
  onClick,
}) {
  return (
    <div className="projeto-card">

      <div className="projeto-icone">
        {icone}
      </div>

      <h3>{titulo}</h3>

      <p>{descricao}</p>

      <button onClick={onClick}>
        Ver Projeto
      </button>

    </div>
  );
}