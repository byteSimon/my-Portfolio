import { useEffect, useRef } from "react";
import anime from "animejs";
import styles from "./hero.module.scss";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";

export const Hero = () => {
  const textWrapperRef = useRef<HTMLSpanElement>(null);
  const lettersRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!lettersRef.current || !textWrapperRef.current) return;

    const text = lettersRef.current.textContent || "";
    lettersRef.current.innerHTML = text.replace(
      /([^\x00-\x80]|\w)/g,
      `<span class='${styles.letter}'>$&</span>`,
    );

    const textWidth = lettersRef.current.getBoundingClientRect().width;

    const timeline = anime.timeline({
      loop: true,
    });

    timeline
      .add({
        targets: `.${styles.line}`,
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700,
      })
      .add({
        targets: `.${styles.line}`,
        translateX: [0, textWidth + 10], // Add 10px padding
        easing: "easeOutExpo",
        duration: 700,
        delay: 100,
      })
      .add({
        targets: `.${styles.letter}`,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: "-=775",
        delay: (el, i) => 34 * (i + 1),
      })
      .add({
        targets: [`.${styles.textWrapper}`],
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });

    return () => timeline.pause();
  }, []);

  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.heroGrid}>
        <div className={styles.copyWrapper}>
          <Reveal>
            <h1 className={styles.title}>
              Hi, I&apos;m SwaGy<span>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className={styles.subTitle}>
              I&apos;m a{" "}
              <span className={styles.textWrapper} ref={textWrapperRef}>
                <span className={styles.line}></span>
                <span className={styles.letters} ref={lettersRef}>
                  Software Engineer
                </span>
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <>
              <p className={styles.aboutCopy}>
                Spent{" "}
                <span className={styles.yellowtext}>
                  1+ year building and scaling applications for some pretty cool
                  companies and individuals.
                </span>
                <br />
                <br />
              </p>
              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView()
                }
                className={styles.connetbtn}
              >
                <span className={styles.textone}>Let&apos;s connect</span>
                <span className={styles.texttwo}>Awsome</span>
              </button>
            </>
          </Reveal>
        </div>
      </div>
      <DotGrid />
    </section>
  );
};
