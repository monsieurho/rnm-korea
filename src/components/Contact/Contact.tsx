/**
 * About & Credits Section Component
 * Displays contact information and team credits in a minimalist, typography-focused layout
 * Inspired by modernist design principles with high contrast and clean spacing
 */

"use client";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Contact</h1>

        <div className={styles.contentGrid}>
          <div className={styles.contactInfo}>
            <a href="mailto:contact@rnm.kr" className={styles.contactLink}>
              contact@rnm.kr
            </a>
            <p className={styles.location}>Seoul, South Korea</p>
          </div>

          <div className={styles.creditsInfo}>
            <div className={styles.creditRow}>
              <span className={styles.creditLabel}>Terms</span>
              <span className={styles.creditValue}>Privacy Policy</span>
              <span className={styles.creditValue}>Terms & Conditions</span>
            </div>

            <div className={styles.creditRow}>
              <span className={styles.creditLabel}>Social</span>
              <span className={styles.creditValue}>Facebook</span>
              <span className={styles.creditValue}>Instagram</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
