"use client";

/**\* Floating social media button component
 * Features a minimal design with smooth animations and transitions
 */

import { useState } from "react";
import styles from "./SocialFloat.module.css";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com/rnm",
    icon: "📸",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/rnm",
    icon: "💼",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@rnm",
    icon: "📺",
  },
];

export const SocialFloat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={`${styles.socialLinks} ${isOpen ? styles.open : ""}`}>
        {socialLinks.map((social, index) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            {social.icon}
          </a>
        ))}
      </div>
      <button
        className={`${styles.floatingButton} ${isOpen ? styles.active : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle social media links"
      >
        <div className={styles.buttonInner}>
          <span className={styles.line} />
          <span className={styles.line} />
        </div>
      </button>
    </div>
  );
};
