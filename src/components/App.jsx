import { useState } from 'react';

import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const state = { good, neutral, bad };

  const handleBtn = pressedBtn => {
    switch (pressedBtn) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
    }
  };

  const totalFeedback = good + neutral + bad;

  const countPositiveFeedback = () => {
    return good ? ((good / totalFeedback) * 100).toFixed() : 0;
  };

  return (
    <main className="wrapper">
      <Section title="Please leave your feedback">
        <FeedbackOptions onLeaveFeedback={handleBtn} options={state} />
      </Section>
      <Section>
        {!totalFeedback ? (
          <p>No feedback</p>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={countPositiveFeedback()}
          />
        )}
      </Section>
    </main>
  );
};

export default App;

// class OldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce((pr, value) => {
//       return pr + value;
//     });
//   };

//   countPositiveFeedbackPercentage = () => {
//     return this.state.good
//       ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed()
//       : 0;
//   };

//   handleBtn = mark => {
//     this.setState(prevState => {
//       return {
//         [mark]: prevState[mark] + 1,
//       };
//     });
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     // return (
//     //   <main className="wrapper">
//     //     <Section title="Please leave your feedback">
//     //       <FeedbackOptions
//     //         onLeaveFeedback={this.handleBtn}
//     //         options={this.state}
//     //       />
//     //     </Section>
//     //     <Section>
//     //       {!this.countTotalFeedback() ? (
//     //         <p>No feedback</p>
//     //       ) : (
//     //         <Statistics
//     //           good={good}
//     //           neutral={neutral}
//     //           bad={bad}
//     //           total={this.countTotalFeedback()}
//     //           positivePercentage={this.countPositiveFeedbackPercentage()}
//     //         />
//     //       )}
//     //     </Section>
//     //   </main>
//     // );
//   }
// }
// export default App;

//
// ===================================
// до event.target можна достукуватись тільки в синхронному коді,
//   тому щоб використовувати його в асинхронному збережи таргет
//    в змінну
// const target = event.target;
// =======================================
