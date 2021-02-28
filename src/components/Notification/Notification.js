import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ massage }) => {
  return <h3>{massage}</h3>;
};

Notification.propTypes = {
  massage: PropTypes.string,
};

export default Notification;
