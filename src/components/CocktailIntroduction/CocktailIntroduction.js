import * as React from 'react';
import * as styles from './CocktailIntroduction.module.css';

const CocktailIntroduction = () => {
  return (
    <section id="cocktail" className={styles.section}>
      <div className={styles.imageContainer}>
        <img src="/images/cocktail.jpg" alt="カクテル" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>オリジナルカクテル</h2>
        <p className={styles.description}>
          当店自慢のカクテルは、熟練のバーテンダーが一杯一杯心を込めて作ります。クラシックなカクテルはもちろん、季節や食材に合わせたオリジナルカクテルもご用意しております。
        </p>
        <p className={styles.description}>
          お客様のお好みに合わせて、カクテルをカスタマイズすることも可能です。甘さ、酸味、アルコール度数など、お気軽にバーテンダーにご相談ください。
        </p>
        <p className={styles.description}>
          また、ノンアルコールカクテルも取り揃えておりますので、お酒が飲めない方もお楽しみいただけます。
        </p>
      </div>
    </section>
  );
};

export default CocktailIntroduction;