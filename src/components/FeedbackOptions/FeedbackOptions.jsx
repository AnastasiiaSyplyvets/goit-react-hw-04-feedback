import React from 'react';
import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <h1 className={css.sectionTitle}>Please leave feedback</h1>
      <ul className={css.list}>
        {options.map(option => {
          return (
            <li key={option}>
              <button
                name={option}
                className={css.listBtn}
                type="button"
                onClick={onLeaveFeedback}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
