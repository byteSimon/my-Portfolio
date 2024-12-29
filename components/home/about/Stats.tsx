import { FC } from "react";
import styles from "./stats.module.scss";
import { IconType } from "react-icons";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGithub,
  SiCplusplus,
  SiGraphql,
  SiFirebase,
  SiVercel,
  SiLaravel,
  SiPhp,
  SiMysql,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";


interface TechInfo {
  icon: IconType;
  color: string;
}

interface TechStackType {
  [key: string]: TechInfo;
}

// Define type for the TechChip props
interface TechChipProps {
  name: string;
}

const techStack: TechStackType = {
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  HTML: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss3, color: "#1572B6" },
  Tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
  React: { icon: SiReact, color: "#61DAFB" },
  Nextjs: { icon: SiNextdotjs, color: "#000000" },
  Redux: { icon: SiRedux, color: "#764ABC" },
  NodeJS: { icon: SiNodedotjs, color: "#339933" },
  Express: { icon: SiExpress, color: "#000000" },
  MySql: { icon: SiMysql, color: "#4169E1" },
  Postgres: { icon: SiPostgresql, color: "#4169E1" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  GitHub: { icon: SiGithub, color: "#181717" },
  Php: { icon: SiPhp, color: "#239120" },
  Java: { icon: FaJava, color: "#87CEEB" },
  "Qt-C++": { icon: SiCplusplus, color: "#00599C" },
  "React Native": { icon: SiReact, color: "#61DAFB" },
  GraphQL: { icon: SiGraphql, color: "#E10098" },
  Firebase: { icon: SiFirebase, color: "#FFCA28" },
  Vercel: { icon: SiVercel, color: "#000000" },
  Laravel: { icon: SiLaravel, color: "#FF2D20" },
};

const TechChip: FC<TechChipProps> = ({ name }) => {
  const tech = techStack[name];

  // Special case for C#
  if (name === "C#") {
    return (
      <span className={`${styles.chip} chip`}>
        <img
          src="./csharp.png" // Changed from c#.png to avoid special character
          alt="C#"
          className={styles.chipIcon}
          style={{ width: "25px", height: "25px", objectFit: "contain" }}
        />
        <span className={styles.chipText}>{name}</span>
      </span>
    );
  }

  if (!tech) return <span className="chip">{name}</span>;

  const Icon = tech.icon;
  return (
    <span className={`${styles.chip} chip`}>
      <Icon className={styles.chipIcon} style={{ color: tech.color }} />
      <span className={styles.chipText}>{name}</span>
    </span>
  );
};

export const Stats: FC = () => {
  const workTech = [
    "JavaScript",
    "HTML",
    "CSS",
    "Php",
    "Java",
    "React",
    "Nextjs",
    "Redux",
    "NodeJS",
    "Express",
    "MySql",
    "Postgres",
    "MongoDB",
    "GitHub",
    "C#",
    "Qt-C++",
  ] as const;

  const funTech = [
    "React Native",
    "Tailwind",
    "GraphQL",
    "Firebase",
    "Vercel",
    "Laravel",
  ] as const;

  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            {workTech.map((tech) => (
              <TechChip key={tech} name={tech} />
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            {funTech.map((tech) => (
              <TechChip key={tech} name={tech} />
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
};
