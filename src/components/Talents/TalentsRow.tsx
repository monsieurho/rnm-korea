/**
 * TalentsRow Component
 *
 * A horizontal scrollable row of grayscale company/talent logos with seamless overflow.
 * Used to display partnerships, collaborations, or featured talents in a clean,
 * minimal style without padding or gaps between images.
 */

import React from "react";
import Image from "next/image";
import styles from "./TalentsRow.module.css";

// Define the talents data with public folder paths
export const TALENTS_DATA = [
  {
    id: "1",
    imagePath: "/talents/1.png",
    name: "Company 1",
  },
  {
    id: "2",
    imagePath: "/talents/2.png",
    name: "Company 2",
  },
  {
    id: "3",
    imagePath: "/talents/3.png",
    name: "Company 3",
  },
  {
    id: "4",
    imagePath: "/talents/4.png",
    name: "Company 4",
  },
  {
    id: "5",
    imagePath: "/talents/5.png",
    name: "Company 5",
  },
  {
    id: "6",
    imagePath: "/talents/6.png",
    name: "Company 6",
  },
  {
    id: "7",
    imagePath: "/talents/7.png",
    name: "Company 7",
  },
  {
    id: "8",
    imagePath: "/talents/8.png",
    name: "Company 8",
  },
  {
    id: "9",
    imagePath: "/talents/9.png",
    name: "Company 9",
  },
  {
    id: "10",
    imagePath: "/talents/10.png",
    name: "Company 10",
  },
  {
    id: "11",
    imagePath: "/talents/11.png",
    name: "Company 11",
  },
  {
    id: "12",
    imagePath: "/talents/12.png",
    name: "Company 12",
  },
] as const;

interface TalentsRowProps {
  talents?: typeof TALENTS_DATA;
}

export const TalentsRow: React.FC<TalentsRowProps> = ({
  talents = TALENTS_DATA,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.scrollContainer}>
        {talents.map((talent) => (
          <div key={talent.id} className={styles.imageWrapper}>
            <Image
              src={talent.imagePath}
              alt={talent.name}
              className={styles.talentImage}
              width={400}
              height={300}
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};
