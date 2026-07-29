export default function ProjetoDestaque() {
  return (
    <section className="projeto-destaque">

      <div className="badge">
        🚀 Projeto Principal
      </div>

      <h2>
        Sistema Financeiro Completo
      </h2>

      <p>
        Sistema desenvolvido para controle
        financeiro pessoal, investimentos,
        empréstimos, despesas compartilhadas
        e dashboards gerenciais.
      </p>

      <div className="projeto-grid">

        <div className="feature-card">
          💰 Investimentos
        </div>

        <div className="feature-card">
          📋 Controle de despesas
        </div>

        <div className="feature-card">
          📊 Dashboard
        </div>

        <div className="feature-card">
          💵 Gestão de Empréstimos
        </div>

      </div>

    </section>
  );
}