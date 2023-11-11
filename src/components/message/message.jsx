import React from 'react';
import PropTypes from 'prop-types';
import css from '../Statistic/Statistic.module.css';

export const Notification = ({ message }) => {
  return (
    <>
      <p className={css.feedback}>{message}</p>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};
