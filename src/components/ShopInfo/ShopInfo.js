import * as React from 'react';
import * as styles from './ShopInfo.module.css';

const ShopInfo = () => {
  return (
    <section id="shop-info" className={styles.section}>
      <div className={styles.leftColumn}>
        <div className={styles.infoItem}>
          <h3 className={styles.infoTitle}>住所 /</h3>
          <p className={styles.infoText}>
            〒222-2222 <br />
            東京都八王子市
          </p>
        </div>
        <div className={styles.infoItem}>
          <h3 className={styles.infoTitle}>アクセス /</h3>
          <p className={styles.infoText}>
            京王線「京王八王子駅」より徒歩5分
          </p>
        </div>
        <div className={styles.infoItem}>
          <h3 className={styles.infoTitle}>営業時間 /</h3>
          <p className={styles.infoText}>
            【火曜日～金曜日】<br />
            17:00～24:00（フードL.O.23:00）<br />
            【土曜日・日曜日・祝日】<br />
            15:00～24:00（フードL.O.23:00）
          </p>
        </div>
        <div className={styles.infoItem}>
          <h3 className={styles.infoTitle}>定休日 /</h3>
          <p className={styles.infoText}>月曜日</p>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.infoItem}>
          <h3 className={styles.infoTitle}>席数 /</h3>
          <p className={styles.infoText}>8席（カウンターのみ）</p>
        </div>
        <div className={styles.infoItem}>
          <h3 className={styles.infoTitle}>貸切 /</h3>
          <p className={styles.infoText}>可（要予約）</p>
        </div>
        <div className={styles.infoItem}>
          <h3 className={styles.infoTitle}>駐車場 /</h3>
          <p className={styles.infoText}>無し ※近隣にコインパーキングがございます。</p>
        </div>
        <div className={styles.infoItem}>
          <h3 className={styles.infoTitle}>クレジットカード /</h3>
          <p className={styles.infoText}>可（VISA,Master,JCB）</p>
        </div>
        <div className={styles.infoItem}>
          <h3 className={styles.infoTitle}>電子マネー /</h3>
          <p className={styles.infoText}>可（交通系電子マネー）</p>
        </div>
        <div className={styles.infoItem}>
          <h3 className={styles.infoTitle}>備考 /</h3>
          <p className={styles.infoText}>
            <br/>・席料、サービス料として、お1人様500円頂戴いたします。<br />
            ・喫煙可（20時以降）
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShopInfo;