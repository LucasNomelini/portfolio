export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo" onClick={() =>{
        document.getElementById("inicio")?.scrollIntoView({
          behavior: "smooth"
        })
      }}>Nomelini.dev</h2>

      <ul>
        <li
  onClick={() => {
    document
      .getElementById("sobre")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
>
  Sobre
</li>

<li
  onClick={() => {
    document
      .getElementById("tecnologias")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
>
  Tecnologias
</li>

<li
  onClick={() => {
    document
      .getElementById("contato")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
>
  Contato
</li>
      </ul>
    </nav>
  );
}