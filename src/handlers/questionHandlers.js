'use strict';

import { QUESTION_CONTAINER_ID, QUIZ_CONTAINER_ID, NEXT_QUESTION_BUTTON_ID, SCORE_SPAN_ID } from '../constants.js';
import { clearDOMElement, getDOMElement, getKeyByValue, checkAnswer, getCardElements, getCurrentContent, getInactiveCardElements, getCardContent } from '../utils/DOMUtils.js';
import { quizData, animationData } from '../data.js';
import { nextQuestion, showResult } from '../listeners/questionListeners.js';
import { createResultContainerElement } from '../views/questionViews.js'

export const incrementQuestionIndex = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
};

export const showCurrentQuestion = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const questionContainer = getDOMElement(QUESTION_CONTAINER_ID);
  const nextQuestionButton = getDOMElement(NEXT_QUESTION_BUTTON_ID);
  nextQuestionButton.removeEventListener('click', nextQuestion);
};

export const deleteQuestionCard = () => {
  const card = getCardElements();
  let currentContent = getCurrentContent();
  const cardContent = getCardContent();
  const cardContentNumber = 9 - animationData.i;

  cardContent[cardContentNumber].classList.remove("active");

  card[animationData.layer - 1].style.height = "0";
  card[animationData.layer - 1].style.padding = "0";
  card[animationData.layer - 1].classList.remove("active");
  card[animationData.layer - 1].classList.add("inactive");

  animationData.i += 1;
  animationData.step += 10;
  animationData.layer -= 1;

  card[9 - animationData.i].style.animation = 'neon 2s ease-in-out infinite alternate';

  if (animationData.i < cardContent.length) {
    document.getElementById("step").style.width = animationData.step + "%";
    const nextCardContentNumber = 9 - animationData.i;
    const nextItem = cardContent[nextCardContentNumber];
    currentContent = nextItem.classList.add("active");
  }
  if (animationData.i == 9) {
    const nextQuestionButton = getDOMElement(NEXT_QUESTION_BUTTON_ID);
    nextQuestionButton.innerText = 'Show Result';
    nextQuestionButton.removeEventListener('click', nextQuestion);
    nextQuestionButton.addEventListener('click', showResult);
  }
};

export const showCurrentScore = () => {
  const currentScore = quizData.currentTotalScore;
  const scoreSpan = getDOMElement(SCORE_SPAN_ID);
  scoreSpan.innerText = currentScore;
};

export const clearQuizContainer = () => {
  const quizContainer = getDOMElement(QUIZ_CONTAINER_ID);
  clearDOMElement(quizContainer);
};

export function handleSelectedAnswer(evt) {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const nextQuestionButton = getDOMElement(NEXT_QUESTION_BUTTON_ID);

  currentQuestion.selected = getKeyByValue(currentQuestion.answers, evt.target.textContent);
  nextQuestionButton.addEventListener('click', nextQuestion);
};

export function handleQuestionResult() {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const isCorrect = checkAnswer(currentQuestion.selected, currentQuestion.correct);
  const correctAnswer = currentQuestion.answers[currentQuestion.selected];
  if (isCorrect) {
    quizData.currentTotalScore += 1;
  }
};

export const showQuizResult = () => {
  clearQuizContainer();
  const userInterfaceContainer = getDOMElement('user-interface');
  const resultPage = createResultContainerElement();
  userInterfaceContainer.appendChild(resultPage);
};
