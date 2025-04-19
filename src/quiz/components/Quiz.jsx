import React, { useState } from "react";
import "./styles.css";

export default function Quiz({ data }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (selected === data[current].answer) {
      setScore(score + 1);
    }
    if (current < data.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      {showResult ? (
        <div className="result">
          <h2>Quiz Completed!</h2>
          <p>
            Your Score: {score} / {data.length}
          </p>
        </div>
      ) : (
        <div className="quiz-box">
          <h3>{data[current].question}</h3>
          <ul>
            {data[current].options.map((opt, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name="option"
                    value={index}
                    checked={selected === index}
                    onChange={() => setSelected(index)}
                  />
                  {opt}
                </label>
              </li>
            ))}
          </ul>
          <button disabled={selected === null} onClick={handleNext}>
            {current === data.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
}
