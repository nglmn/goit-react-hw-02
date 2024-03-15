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

  const updateFeedback = (e) => {
    const targetName = e.target.textContent.toLowerCase();

    const resetBtn = document.querySelector('#reset');
    if (e.target === resetBtn) {
      setFeedback(initData);
    } else {
      setFeedback({ ...feedback, [targetName]: feedback[targetName] + 1 });
    }
  }

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback])

  const totalFeedback = Object.values(feedback).reduce((acc, cur) => { return acc + cur }, 0);

  return (
    <div className="app">
      <Description />
      <OptionButtons updateFeedback={updateFeedback} totalFeedback={totalFeedback} feedback={feedback} />
      <div className="feedback-wrapper">
        {totalFeedback != 0 ?
          <Feedback feedback={feedback} totalFeedback={totalFeedback} />
          : <Notification />}
      </div>
    </div>
  )
}

export default App;