import { useState } from "react";
import Statistics from "./Statistics";
import Button from "./Button";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (type) => {
    switch (type) {
      case "good":
        setGood((prevGood) => prevGood + 1);
        break;
      case "neutral":
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;
      case "bad":
        setBad((prevBad) => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const totalFeedback = good + neutral + bad;

  const averageScore = totalFeedback === 0 ? 0 : (good - bad) / totalFeedback;

  const positivePercentage =
    totalFeedback === 0 ? 0 : (good / totalFeedback) * 100;

  return (
    <>
      <h1>customer feedback</h1>
      <div>
        <Button handleClick={() => handleFeedback("good")} text="good" />
        <Button handleClick={() => handleFeedback("neutral")} text="neutral" />
        <Button handleClick={() => handleFeedback("bad")} text="bad" />
      </div>
      <h2>statistics</h2>
      {totalFeedback > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={totalFeedback}
          averageScore={averageScore}
          positivePercentage={positivePercentage}
        />
      ) : (
        <p>no feedback yet</p>
      )}
    </>
  );
};

export default App;
