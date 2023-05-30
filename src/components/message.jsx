import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistic.module.css';

export const Notification = ({ message }) => {
  console.log('hello');
  return (
    <>
      <p className={css.feedback}>{message}</p>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};
