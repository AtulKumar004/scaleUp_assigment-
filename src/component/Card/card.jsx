import React from "react";
import styles from "./card.module.scss";

export default function Card({ data }) {
  const truncateSummary = (summary, maxLength = 250) => {
    const isMobile = window.innerWidth < 768; // Assuming mobile breakpoint is 768px
    const mobileMaxLength = 100; // Adjust this value as needed for mobile screens
    
    const effectiveMaxLength = isMobile ? mobileMaxLength : maxLength;
    
    if (summary && summary.length > effectiveMaxLength) {
      return summary.substring(0, effectiveMaxLength) + "...";
    }
    return summary;
  };
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${day}-${month}`;
  };
  const convertRating = (rating) => {
    if (rating === undefined || rating === null) return 'N/A';
    const convertedRating = Math.round(rating / 10);
    return Math.max(1, Math.min(10, convertedRating));
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card_logo}> </div>
      <div className={styles.card_body}>
        <div className={styles.card_body_left}>
          <h3>{data?.name}</h3>
          <p> <span>Release Date: </span> 
          <span>{formatDate(data?.first_release_date)}</span>
          </p>
          <p>{truncateSummary(data?.summary)}</p>
        </div>

        <div className={styles.card_body_right}>
        <span>{convertRating(data?.rating)}</span>
        </div>
      </div>
    </div>
  );
}
