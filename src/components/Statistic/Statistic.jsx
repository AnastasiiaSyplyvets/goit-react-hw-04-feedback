import PropTypes from 'prop-types';
import css from './Statistic.module.css';

export const Counter = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.statCover}>
      <h2 className={css.statTitle}>Statistic</h2>

      <p className={css.statOption}>
        Good: <span>{good}</span>
      </p>
      <p className={css.statOption}>
        Neutral: <span>{neutral}</span>
      </p>
      <p className={css.statOption}>
        Bad: <span>{bad}</span>
      </p>
      <p className={css.statOption}>
        Total: <span>{total}</span>
      </p>
      <p className={css.statOption}>
        Positive feedback: <span>{positivePercentage}%</span>
      </p>
    </div>
  );
};

export default Counter;

Counter.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
