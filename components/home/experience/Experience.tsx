import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "FalconX Electro Technologies Pvt Ltd.",
    position: "Junior Engineer",
    time: "Feb 2024 - September 2024",
    location: "Hydrabad",
    description:
      "Responsible for developing and building functional, low-level and dynamic Embedded System Software for Deffense organization. Coordinated with hardware team for test & bug fixes, features and code refactoring.",
    tech: [
      ".Net ",
      "C#",
      "C++",
      "QT",
      "Embedded C",
      "Arduino",
      "Microcontroller",
    ],
  },
  {
    title: "Semicolon ITES.",
    position: "Software Developer",
    time: "November 2024 - Present",
    location: "Durgapur, West-Bengal",
    description:
      "Designed and Developed and deployed high-performance company website with new user-facing features using Next JS, React.js and some custom code which improved application performance by 75% and facilitated an engaging user experience mainly focused on UI/UX. Also created and integrate RESTful APIs into the React application.",
    tech: ["JavaScript", "NextJs", "ReactJs", "Git", "Tailwind"],
  },
];
