import React from 'react';
import styles from './Feedback.module.css';
import PropTypes from 'prop-types';

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
FeedbackBtn.propTypes = {
  feedback: PropTypes.string,
  onLeaveFeedback: PropTypes.func,
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
