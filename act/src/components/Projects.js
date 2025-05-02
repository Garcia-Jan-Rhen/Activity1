import '../App.css';

export default function Projects() {
  const items = [
    {
      title: 'E-commerce Site',
      desc: 'HTML and CSS e-commerce site with a shopping cart feature.',
      tech: ['PHP', 'REACT', 'MYSQL'],
      link: '#',
    },
    {
      title: 'Portfolio Website',
      desc: 'A personal portfolio website built with React.',
      tech: ['React', 'CSS'],
      link: '#',
    },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {items.map((p, i) => (
          <div key={i} className="project-card">
            <div className="project-content">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tech-list">
                {p.tech.map((t, j) => (
                  <span key={j} className="tech-item">{t}</span>
                ))}
              </div>
              <a href={p.link} className="project-link">View Repo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}