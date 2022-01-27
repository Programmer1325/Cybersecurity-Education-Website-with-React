import React, { useState } from "react";
import "../Quiz.css";

function Quiz() {
  const Questions = [
    {
      question:
        "Which one of the following cyber attack is caused by a hacker injecting code into a vulnerable website's search bar?",
      answerOptions: [
        { answer: "Denial of Service", CorrectAnswer: false },
        { answer: "Malware Attack", CorrectAnswer: false },
        { answer: "Phishing Attack", CorrectAnswer: false },
        { answer: "SQL Injection", CorrectAnswer: true },
      ],
    },
    {
      question: "What is a Man in the Middle Attack?",
      answerOptions: [
        {
          answer:
            "It is a attack where the hacker tricks the user thinking they are the right person and convincing them to download malicious software",
          CorrectAnswer: false,
        },
        {
          answer:
            "The attacker physically sits between the router and the endpoint",
          CorrectAnswer: false,
        },
        {
          answer:
            "The attacker makes it so that all traffic between a two party transaction",
          CorrectAnswer: true,
        },
        {
          answer:
            "It is an attack where the hacker injects code into a vulnerable website's search bar",
          CorrectAnswer: false,
        },
      ],
    },
    {
      question: "What is a Firewall?",
      answerOptions: [
        { answer: "It is a type of port", CorrectAnswer: false },
        {
          answer: "It filters all incoming and outgoing traffic",
          CorrectAnswer: true,
        },
        {
          answer: "It allows malicious software to be downloaded",
          CorrectAnswer: false,
        },
        { answer: "It is a wall made of fire", CorrectAnswer: false },
      ],
    },
    {
      question: "What are Honey Pots used in cybersecurity?",
      answerOptions: [
        {
          answer: "It is made to look vulnerable to attract hackers",
          CorrectAnswer: true,
        },
        { answer: "It is a pot full of honey", CorrectAnswer: false },
        { answer: "It is used to attract bees", CorrectAnswer: false },
        { answer: "It filters internet traffic", CorrectAnswer: false },
      ],
    },
    {
      question: "Which one of the following motive is not real for a hacker?",
      answerOptions: [
        { answer: "To have fun", CorrectAnswer: false },
        { answer: "To steal money", CorrectAnswer: false },
        { answer: "To get your Netflix password", CorrectAnswer: false },
        { answer: "To donate money", CorrectAnswer: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (CorrectAnswer) => {
    if (CorrectAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const Feedbackgiver = (FinalScore) => {
    var Feedback = "Bad job. Read the resources and see the video again";

    if (FinalScore > 3) {
      Feedback = "Good job. You are a cybersecurity expert";
    }

    return Feedback
  };

  return (
    <div className="Quiz-Body">
      {showScore ? (
        <div className="Score">
          <h1 className="Heading">
            You scored {score} out of {Questions.length}
          </h1>
          <p className="Text">{Feedbackgiver(score)}</p>
        </div>
      ) : (
        <>
          <div className="Question-Section">
            <div className="Question-Count">
              <span className="Heading">
                Question {currentQuestion + 1} / {Questions.length}
              </span>
            </div>
            <div className="Question-Text">
              <p className="Text">{Questions[currentQuestion].question}</p>
            </div>
          </div>
          <div className="Answer-Section">
            {Questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() =>
                  handleAnswerOptionClick(answerOption.CorrectAnswer)
                }
                className="Button Quiz-Btn"
              >
                <p className="ButtonText">{answerOption.answer}</p>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
