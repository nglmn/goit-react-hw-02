import { useEffect, useState } from "react";
import Description from "../Description/Description";
import OptionButtons from "../OptionButtons/OptionButtons";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

import './App.css';

const initData = {
  good: 0,
  neutral: 0,
  bad: 0
};

const App = () => {
  let [feedback, setFeedback] = useState(() => {
    const getDataFromLS = JSON.parse(localStorage.getItem('feedback'));
    if (getDataFromLS === null) {
      return initData;
    }
    return getDataFromLS;
  });

  const updateFeedback = (targetName) => {
    if (targetName === 'reset') {
      setFeedback(initData);
    } else {
      setFeedback({ ...feedback, [targetName]: feedback[targetName] + 1 });
    }
  }

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback])

  const totalFeedback = Object.values(feedback).reduce((acc, cur) => { return acc + cur }, 0);
  const { good, neutral } = feedback;
  const positiveRatio = Math.round((((good + neutral) / totalFeedback) * 100));

  return (
    <div className="app">
      <Description />
      <OptionButtons updateFeedback={updateFeedback} totalFeedback={totalFeedback} feedback={feedback} />
      <div className="feedback-wrapper">
        {totalFeedback != 0 ?
          <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveRatio={positiveRatio} />
          : <Notification />}
      </div>
    </div>
  )
}

export default App;