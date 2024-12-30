import React, { useState, useEffect } from "react";
import { SideBar } from "../nav/SideBar";
// import { Hero } from "./hero/Hero";
import styles from "./home.module.scss";
import { Heading } from "../nav/Heading";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Experience } from "./experience/Experience";
import { Contact } from "./contact/Contact";
import Stars from "../Stars";
import { Loader } from "../Loader";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main id="main">
          <Stars />
          <Heading />
          {/* <Hero /> */}
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </>
  );
};
