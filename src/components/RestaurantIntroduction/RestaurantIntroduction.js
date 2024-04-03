// src/components/RestaurantIntroduction/RestaurantIntroduction.js
import * as React from 'react';
import * as styles from './RestaurantIntroduction.module.css';

const RestaurantIntroduction = () => {
  return (
    <section id="concept" className={styles.section}>
      <div className={styles.imageContainer}>
        <img src="/images/bar1.jpg" alt="料理1" className={`${styles.image} ${styles.imageTopLeft}`} />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>大人の隠れ家バー「The Last」</h2>
        <p className={styles.description}>
          八王子市、京王八王子駅から徒歩5分。路地裏に佇む大人の隠れ家バー「The Last」。ここでは、厳選されたウイスキーやカクテルを、ジャズの生演奏とともにお楽しみいただけます。
        </p>
        <p className={styles.description}>
          「The Last」の真骨頂は、熟練バーテンダーが一人一人のお客様のために作る「カスタムカクテル」。お客様の好み、気分、そして料理に合わせて、最適なカクテルを提案いたします。また、シェフ特製の小皿料理は、カクテルとのマリアージュを楽しむことができます。
        </p>
        <p className={styles.description}>
          大切な人と過ごす特別な夜、仕事帰りの一杯、友人との語らいの場など、様々なシーンでご利用ください。<br />「The Last」で、特別な時間をお過ごしください。
        </p>
      </div>
    </section>
  );
};

export default RestaurantIntroduction;