import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Howdy! I&apos;m Swatantra Mitra aka. Swagy and I&apos;m a graduate
              in{" "}
              <span className={styles.yellowText}>
                Electronics and Communication Engineering
              </span>{" "}
              with a Bachelor of Technology degree.
              <br />
              <br />I have experience working in{" "}
              <span className={styles.yellowText}>
                Web development, Mobile & Embedded Software
              </span>{" "}
              worlds, with a focus on both backend and frontend.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            {`"`}
              When I&apos;m not immersed in coding you’ll find me exploring the
              wonders of{" "}
              <span className={styles.yellowText}>
                AI, Robotics & Astronomy
              </span>{" "}
              . I’m also a huge fan of Anime and post apocalyptic Web-Series, and I enjoy
              sharpening my mind with Chess or kicking back with a game of
              football. For me, a healthy work-life balance is the secret to staying inspired and at the top of my game!{`"`}
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
