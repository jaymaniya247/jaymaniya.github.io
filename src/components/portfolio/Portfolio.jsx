import React from "react";
import IMG1 from "../../assets/bookstore.png";
import IMG2 from "../../assets/todo.png";
import IMG3 from "../../assets/shelter.png";
import IMG4 from "../../assets/fake.png";
import IMG5 from "../../assets/news.png";
import IMG6 from "../../assets/math.png";

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Bookstore",
      img: IMG1,
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "FakeStore",
      img: IMG4,
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "To-Do-App",
      img: IMG2,
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Shelter",
      img: IMG3,
      link: "#",
      github: "#",
    },
    {
      id: 5,
      title: "World News",
      img: IMG5,
      link: "#",
      github: "#",
    },
    {
      id: 6,
      title: "Math Resource",
      img: IMG6,
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <h3>{pro.title}</h3>
            <div className="portfolio__item-cta">
              <a href={pro.github} className="btn">
                GitHub
              </a>
              <a href={pro.link} className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
