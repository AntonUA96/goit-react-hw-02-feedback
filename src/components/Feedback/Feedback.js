import React from 'react';
import styles from './Feedback.module.css';

const FeedbackBtn = ({ feedback, onLeaveFeedback }) => {
  return (
    <button
      type="button"
      className={styles.button}
      data-feedback={feedback}
      onClick={onLeaveFeedback}
    >
      {feedback}
    </button>
  );
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <FeedbackBtn
      key={option}
      feedback={option}
      onLeaveFeedback={onLeaveFeedback}
    />
  ));
};

export default FeedbackOptions;
