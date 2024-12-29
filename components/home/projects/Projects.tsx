import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Get To Know",
    imgSrc:
      "https://github.com/SwagyXD/Get-to-know/blob/main/Screenshot%202024-12-30%20012720.png?raw=true",
    code: "https://github.com/SwagyXD",
    projectLink: "",
    tech: ["React", "Tailwind", "Laravel", "MySQL"],
    description: "A messaging app like WhatsApp",
    modalContent: (
      <>
        <p>
          Build and created a dynamic reusable messaging application with
          various features.
        </p>
        <p>
          The tech stack is based on ReactJS, connected to a Laravel backend,
          with data stored in Mysql.
        </p>
      </>
    ),
  },
  {
    title: "eCommerce App",
    imgSrc:
      "https://user-images.githubusercontent.com/64949957/153996560-bd631f30-46f0-4248-83b3-d8ce44a8f9e4.PNG",
    code: "https://github.com/SwagyXD/Flipkart-Clone?tab=readme-ov-file",
    projectLink: "https://flipkart-clone-client-three.vercel.app/",
    tech: ["React", "Tailwind", "Redux", "Chart Js", "Node Js", "Express Js", "Mongo DB"],
    description: "MERN stack eCommerce Flipkart-Clone",
    modalContent: (
      <>
        <p>
          MERN-Stack Flipkart with Admin Dashboard with Razoor Payment & Paytm
          Payment Gateway.
        </p>
      </>
    ),
  },
];
