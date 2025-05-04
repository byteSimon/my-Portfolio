import { useState, useEffect } from "react";
import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";

export const Heading = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsScrollingUp(false); // Scrolling down
      } else {
        setIsScrollingUp(true); // Scrolling up
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.heading} ${!isScrollingUp ? styles.hidden : ""}`}
    >
      <MyLinks />
      <button
        className={styles.glowButton}
        onClick={() => window.open("/Swatantra_Mitra_SDE.pdf")}
      >
        <div className={styles.buttonContent}>
          <span className={styles.cv}>CV</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            className={styles.buttonIcon}
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
            ></path>
          </svg>
        </div>
      </button>
    </header>
  );
};
