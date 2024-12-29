import React from "react";
import styles from "./loader.module.scss"; // Create a new CSS module for the loader

export const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sharingon}>
        <div className={styles.ring}>
          <div className={styles.to}></div>
          <div className={styles.to}></div>
          <div className={styles.to}></div>
          <div className={styles.circle}></div>
        </div>
      </div>
    </div>
  );
};
