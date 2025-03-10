import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const projects = [
  {
    text: "Bella Vita Centro estético",
    url: "https://bellavitacentroestetico.vercel.app/",
    description: `Proyecto propio. Aplicación para la gestión de tratamientos cosmetológicos, 
      que permite listar los servicios disponibles y reservar citas con una cosmetóloga 
      específica, seleccionando el día y la hora de preferencia.`,
    technologist: ["Next", "Node", "Express", "MySQL"],
  },
  {
    text: "Experiencias diferentes",
    url: "https://experiencias-diferentes.netlify.app/",
    description: `Proyecto realizado en grupo. 
      Es una aplicación en la que hay roles de administrador y de usuario, en la que 
      los administradores pueden agregar destinos a disfrutar y donde el usuario puede 
      reservar tantas experiencias de disfrute como quiera.`,
    technologist: ["React", "Node", "Express", "MySQL", "Metodología AGILE"],
  },
  {
    text: "Parejas de Emojis",
    url: "https://parejas-emojis-hab.netlify.app/",
    description: `Proyecto realizado en grupo. Creación de un juego de cartas online 
    similar al juego de cartas "memorama".`,
    technologist: ["HTML", "CSS", "JavaScript"],
  },
];

const collaborations = [
  {
    text: "Zephyr Cloud IO",
    url: "https://github.com/ZephyrCloudIO",
  },
  {
    text: "Non profits asociaciones",
    url: "https://github.com/Non-profits-asociaciones",
  },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Noelia Camelia Acosta</h1>
      <h2> Desarrolladora Web Full Stack</h2>

      <article>
        <h3>Proyectos</h3>
        <ul>
          {projects.map((project) => (
            <li key={project.url}>
              <a href={`${project.url}`}>{project.text}</a>
              <p>{project.description}</p>
              <ul>
                {project.technologist.map((tech, index) => (
                  <li key={index}>
                    <p>{tech}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </article>

      <article>
        <h3>Colaboraciones</h3>
        <ul>
          {collaborations.map((collab) => (
            <li key={collab.url}>
              <a href={`${collab.url}`}>{collab.text}</a>
            </li>
          ))}
        </ul>
      </article>

      <article>
        <h3>Sobre mi</h3>
        <p>
          Soy una programadora junior con un fuerte interés en la tecnología y
          el aprendizaje continuo. Hace un tiempo decidí cambiar de rumbo
          profesional hacia el mundo de la programación. Me motiva formar parte
          de proyectos que mejoren la experiencia de lo usuarios y aporten valor
          a la comunidad. Estoy comprometida con la mejora continua, tanto a
          nivel personal como profesional.
        </p>
        <p>
          Visita mi <a href="https://github.com/NoeCam">github</a> - Aquí podrás
          encontrar todos mis trabajos web.
        </p>
      </article>

      <article>
        <h3>Contacto</h3>
        <p>
          Escríbeme por Whatsapp a{" "}
          <a href="https://wa.me/34600671726">+34 600 67 17 26</a> o envíame un
          correo a{" "}
          <a href="mailto:noeliacamelia@gmail.com">noeliacamelia@gmail.com</a>
        </p>
      </article>

      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
