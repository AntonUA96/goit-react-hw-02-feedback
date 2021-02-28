import React from 'react';
import Notification from '../Notification/Notification';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total > 0 && (
        <ul className={styles.statistics}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive Feedback: {positivePercentage}%</li>
        </ul>
      )}
      {total === 0 && <Notification massage="No feedback given" />}
    </>
  );
};

export default Statistics;
