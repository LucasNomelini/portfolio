export default function Tecnologias() {
  const techs = [
    "React",
    "JavaScript",
    "Firebase",
    "Firestore",
    "Node.js",
    "PHP",
    "Python",
    "Git",
    "GitHub",
    "REST APIs",
    "Vite",
    "Figma",
  ];

  return (
    <section id = "tecnologias" className="tecnologias">

      <h2>Tecnologias</h2>

      <div className="tech-grid">

        {techs.map((tech) => (
          <div
            key={tech}
            className="tech-card"
          >
            {tech}
          </div>
        ))}

      </div>

    </section>
  );
}