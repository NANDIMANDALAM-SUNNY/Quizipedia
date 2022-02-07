import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Quiz from "./components/Quiz";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "You're 3rd place right now in a race. What place are you in when you pass the person in 2nd place?",
      answers: [
        {
          text: "1st",
          correct: true,
        },
        {
          text: "2nd",
          correct: false,
        },
        {
          text: "3rd",
          correct: false,
        },
        {
          text: "all",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Mathew's father has three sons- Joseph I and Joseph II. Can you guess the name of the third son? ",
      answers: [
        {
          text: "Mathew",
          correct: false,
        },
        {
          text: "Joseph III",
          correct: true,
        },
        {
          text: "Jerin",
          correct: false,
        },
        {
          text: "Loin King",
          correct: false,
        },
      ],
    },

    {
      id: 3,
      question: "How many months have 28 days?",
      answers: [
        {
          text: "112",
          correct: false,
        },
        {
          text: "1",
          correct: false,
        },
        {
          text: "none of them",
          correct: false,
        },
        {
          text: "all of them",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "How many 0.5cm slices of bread can you cut from a whole bread that's 25cm long?",
      answers: [
        {
          text: "25",
          correct: false,
        },
        {
          text: "1",
          correct: true,
        },
        {
          text: "39",
          correct: false,
        },
        {
          text: "I dont know",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "The answer is really big.",
      answers: [
        {
          text: "Really big.",
          correct: false,
        },
        {
          text: "THE ANSWER.",
          correct: true,
        },
        {
          text: "An elephant.",
          correct: false,
        },
        {
          text: "The data given is insufficient.",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Divide 30 by half and add ten. ",
      answers: [
        {
          text: "40.5",
          correct: false,
        },
        {
          text: "70",
          correct: true,
        },
        {
          text: "50",
          correct: false,
        },
        {
          text: "I know this is a trick question, so NONE. Ha!",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "There are two clocks of different colors: The red clock is broken and doesn't run at all, but the blue clock loses one second every 24 hours. Which clock is more accurate? ",
      answers: [
        {
          text: "The blue clock.",
          correct: false,
        },
        {
          text: "The red clock.",
          correct: true,
        },
        {
          text: "none",
          correct: false,
        },
        {
          text: "Both",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "A farmer has 17 sheep, all of them but 8 die. How many sheep are still standing? ",
      answers: [
        {
          text: "100",
          correct: false,
        },
        {
          text: "8",
          correct: true,
        },
        {
          text: "88",
          correct: false,
        },
        {
          text: "8888",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "If a leaf falls to the ground in a forest and no one hears it, does it make a sound? ",
      answers: [
        {
          text: "NO",
          correct: false,
        },
        {
          text: "Yes",
          correct: true,
        },
        {
          text: "Depends on how heavy the leaf was.",
          correct: false,
        },
        {
          text: "Depends on where it landed.",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "There are 45 apples in your basket. You take three apples out of the basket. How many apples are left?",
      answers: [
        {
          text: "3",
          correct: false,
        },
        {
          text: "45",
          correct: true,
        },
        {
          text: "42",
          correct: false,
        },
        {
          text: "I do not eat apples!",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              
              <h1 className="endText">You earned: {earned}</h1>
              
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Quiz
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
