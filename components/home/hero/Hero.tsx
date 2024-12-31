import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";

export const Hero = () => {

  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.heroGrid}>
        <div className={styles.copyWrapper}>
          <Reveal>
            <h1 className={styles.title}>
              Hi, It&apos;s DiFF<span>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className={styles.subTitle}>
              I&apos;m a <span>Software Engineer</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className={styles.aboutCopy}>
              Spent{" "}
              <span className={styles.yellowtext}>
                1+ year building and scaling applications for some pretty cool
                companies and individuals.
              </span>
              <br />
              <br />
            </p>
          </Reveal>
          {/* <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image
            className={styles.profile}
            src={Profile}
            priority
            alt="Swatantra Mitra | Software Engineer"
            width={250}
            height={250}
          />
        </motion.div> */}
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
            className={styles.connetbtn}
          >
            <span className={styles.textone}>Let&apos;s connect</span>
            <span className={styles.texttwo}>Awsome</span>
          </button>
        </div>
      </div>
      <DotGrid />
    </section>
  );
};
