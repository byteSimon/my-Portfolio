import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";

export const Contact = () => {
  return (
    <>
      <section className="section-wrapper" id="contact">
        <div className={styles.contactWrapper}>
          <Reveal width="100%">
            <h4 className={styles.contactTitle}>
              Contact<span>.</span>
            </h4>
          </Reveal>
          <Reveal width="100%">
            <p className={styles.contactCopy}>
              Have an idea to discuss? Shoot me an email if you want to connect!
              You can also find me on{" "}
              <Link
                href="https://www.linkedin.com/in/bytesimon/"
                target="_blank"
                rel="nofollow"
                style={{ fontWeight: "bold", fontSize: "3rem" }}
              >
                Linkedin
              </Link>{" "}
              if that&apos;s more your speed.
            </p>
          </Reveal>
          <Reveal width="100%">
            <Link href="mailto:mitraswat999@mail.com">
              <div className={styles.contactEmail}>
                <AiFillMail size="2.4rem" />
                <div>Email Me</div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>
      <footer className={styles.footerSection}>
        <div className="copyright">Made with Simon ❤️</div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Swatantra Mitra. All rights
          reserved.
        </div>
      </footer>
    </>
  );
};
