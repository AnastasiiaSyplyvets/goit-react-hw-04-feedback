import React from 'react';
import Counter from './Statistic/Statistic';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Section } from './Section/Section.jsx';
import { Notification } from './message/message.jsx';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleAmount = event => {
    const name = event.target.name;

    switch (name) {
      case 'good':
        setGood(prevState => {
          return prevState + 1;
        });
        break;
      case 'neutral':
        setNeutral(prevState => {
          return prevState + 1;
        });
        break;
      case 'bad':
        setBad(prevState => {
          return prevState + 1;
        });
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    let total = good + neutral + bad;

    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    let posTotal = Math.round((good * 100) / countTotalFeedback());

    return posTotal;
  };
  return (
    <>
      <Section>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleAmount}
        />
      </Section>
      <Section>
        {countTotalFeedback() === 0 && (
          <Notification message="No feedback given" />
        )}
        {countTotalFeedback() !== 0 && (
          <Counter
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};
