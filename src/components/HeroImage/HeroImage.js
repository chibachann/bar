// src/components/HeroImage/HeroImage.js
import * as React from 'react';
import * as styles from './HeroImage.module.css';

const HeroImage = () => {
 return (
   <section className={styles.section}>
     <div className={styles.imageContainer}>
       <img src="/images/bar_top.jpg" alt="bar_top" className={styles.image} />
       <div className={styles.textContainer}>
         <h1 className={styles.title}>Bar The Last</h1>
         <p className={styles.subtitle}>大人の隠れ家、特別な夜を</p>
       </div>
       <p className={styles.description}>八王子市、〜駅のナイトバー、「The Last」ディナーで人気</p>
       <p className={styles.phone}>Tel 012-3456-789</p>
     </div>
    </section>
 );
};

export default HeroImage;