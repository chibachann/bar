import * as React from 'react';
import * as styles from './WhiskyIntroduction.module.css';

const WhiskyIntroduction = () => {
  return (
    <section id="whisky" className={styles.section}>
      <div className={styles.imageContainer}>
        <img src="/images/whisky.jpg" alt="ウイスキー" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>ウイスキーへのこだわり</h2>
        <p className={styles.description}>
          当店では、世界中から厳選されたウイスキーを取り揃えております。スコットランドのシングルモルトから、アメリカのバーボン、日本のジャパニーズウイスキーまで、様々な種類のウイスキーを楽しむことができます。
        </p>
        <p className={styles.description}>
          ウイスキーの楽しみ方は人それぞれ。ストレートやロック、ハイボールなど、お好みのスタイルでお楽しみください。また、ウイスキーに合う料理も提供しております。ウイスキーと料理のマリアージュを存分に堪能してください。
        </p>
      </div>
      
    </section>
  );
};

export default WhiskyIntroduction;