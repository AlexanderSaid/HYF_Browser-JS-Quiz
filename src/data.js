'use strict';

/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  // the questions in the quiz
  questions: [
    {
      text: 'What are the different ways to declare a JS variable?',
      answers: {
        a: 'constant, let, variable',
        b: 'var, const, let, function',
        c: 'var, let, const',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text: 'What does `typeof` do?',
      answers: {
        a: 'Changes the type of a primitive value',
        b: 'Can tell the difference between arrays and objects',
        c: 'Determines if a value is primitive',
        d: 'Returns a string describing the type of a value',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    // Add more questions here
    {
      text: 'Where is the correct place to insert a JavaScript?',
      answers: {
        a: 'The <body> section',
        b: 'The <head> section',
        c: 'Both <head> and <body> sections',
        d: 'None of the above',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'w3schools',
          href: 'https://www.w3schools.com/js/js_whereto.asp#:~:text=In%20HTML%2C%20JavaScript%20code%20is,and%20tags',
        }
      ],
    },
    {
      text: 'What will the following code `Boolean(10 > 9)` return?',
      answers: {
        a: 'false',
        b: 'true',
        c: 'NaN',
        d: 'undefined',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'w3schools',
          href: 'https://www.w3schools.com/js/js_booleans.asp',
        }
      ],
    },
    {
      text: `What is the correct JavaScript syntax to change the content of the HTML element below?\n
      <p id="demo">This is a demonstration.</p>`,
      answers: {
        a: 'document.getElementById("demo").innerHTML = "Hello World!";',
        b: '#demo.innerHTML = "Hello World!";',
        c: 'document.getElement("p").innerHTML = "Hello World!";',
        d: 'document.getElementByName("p").innerHTML = "Hello World!";',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById',
        },
        {
          text: 'w3schools',
          href: 'https://www.w3schools.com/js/js_htmldom_html.asp',
        }
      ],
    },
    {
      text: `How can you detect the client's browser name?`,
      answers: {
        a: 'browser.name',
        b: 'navigator.userAgent',
        c: 'navigator.appName',
        d: 'Both b & c are correct'
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'codepedia.info',
          href: 'https://codepedia.info/detect-browser-in-javascript',
        },
        {
          text: 'javascripter',
          href: 'http://www.javascripter.net/faq/browsern.htm',
        }
      ],
    },
    {
      text: `Which method could append items to an array without changing the array itself?`,
      answers: {
        a: 'push',
        b: 'splice',
        c: 'concat',
        d: 'length'
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'samanthaming',
          href: 'https://www.samanthaming.com/tidbits/87-5-ways-to-append-item-to-array/',
        }
      ],
    },
    {
      text: `Which declaration keyword can not have a block scope?`,
      answers: {
        a: 'var',
        b: 'let',
        c: 'const',
        d: 'None of the above'
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'w3schools',
          href: 'https://www.w3schools.com/js/js_scope.asp',
        }
      ],
    },
  ],
};
