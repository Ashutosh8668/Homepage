import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutmeimg.jpg")}
          alt="Me working on laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Experienced in building responsive, scalable, and high-performance 
                UIs using React.js, JavaScript, and modern web practices.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Skilled in developing fast and secure backend systems using 
                Java, Spring Boot, Microservices, and C# (Protrak) automation.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cloudIcon.png")} alt="Cloud icon" />
            <div className={styles.aboutItemText}>
              <h3>Cloud & DevOps</h3>
              <p>
                Cloud enthusiast with hands-on experience in AWS & Azure, 
                CI/CD automation, Docker, Terraform, and deploying reliable 
                cloud-based solutions.
              </p>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
};
