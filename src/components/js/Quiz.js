import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import QuizResults from './QuizResults';

const questionsData = [
    {
      question: 'What does HTML stand for?',
      options: ['Hyper Text Markup Language', 'Hyper Transfer Markup Language', 'High Text Markup Language', 'Hyperlink and Text Markup Language'],
      correctAnswer: 'Hyper Text Markup Language',
    },
    {
      question: 'Which HTML tag is used to define an unordered list?',
      options: ['<ul>', '<ol>', '<li>', '<dl>'],
      correctAnswer: '<ul>',
    },
    {
      question: 'What is the purpose of the HTML "alt" attribute in an image tag?',
      options: ['To define the alignment of the image', 'To specify the image source', 'To provide alternative text for the image', 'To set the image height and width'],
      correctAnswer: 'To provide alternative text for the image',
    },
    {
      question: 'Which HTML tag is used to define a hyperlink?',
      options: ['<a>', '<link>', '<href>', '<url>'],
      correctAnswer: '<a>',
    },
    {
      question: 'In HTML, which tag is used to define the structure of an HTML document?',
      options: ['<head>', '<html>', '<title>', '<body>'],
      correctAnswer: '<html>',
    },
    {
      question: 'What does the HTML "doctype" declaration do?',
      options: ['Defines the character set for the HTML document', 'Declares the document type and version of HTML', 'Specifies the language of the HTML document', 'Sets the background color of the HTML document'],
      correctAnswer: 'Declares the document type and version of HTML',
    },
    {
      question: 'Which HTML element is used to create a line break?',
      options: ['<break>', '<br>', '<lb>', '<newline>'],
      correctAnswer: '<br>',
    },
    {
      question: 'What is the purpose of the HTML "meta" tag?',
      options: ['To define metadata about an HTML document', 'To create a navigation menu', 'To include external JavaScript files', 'To set the font style of text'],
      correctAnswer: 'To define metadata about an HTML document',
    },
    {
      question: 'Which attribute is used to specify the URL of the external CSS file in the HTML document?',
      options: ['src', 'link', 'href', 'style'],
      correctAnswer: 'href',
    },
    {
      question: 'What is the HTML element used to define the structure of an HTML table?',
      options: ['<table>', '<tr>', '<td>', '<th>'],
      correctAnswer: '<table>',
    },
  ];

  const cssQuestions = [
    {
      question: 'What does CSS stand for?',
      options: ['Counter Strike: Source', 'Corrective Style Sheet', 'Computer Style Sheet', 'Cascading Style Sheet'],
      correctAnswer: 'Cascading Style Sheet',
    },
    {
      question: 'Which CSS property is used to control the text size?',
      options: ['font-size', 'text-size', 'font-style', 'text-style'],
      correctAnswer: 'font-size',
    },
    {
      question: 'What is the default value of the position property in CSS?',
      options: ['static', 'relative', 'absolute', 'fixed'],
      correctAnswer: 'static',
    },
    {
      question: 'In CSS, what does the "box-sizing" property do?',
      options: ['Defines the size of the box', 'Includes padding and border in the total width and height of an element', 'Sets the box shadow', 'Specifies the shape of the box'],
      correctAnswer: 'Includes padding and border in the total width and height of an element',
    },
    {
      question: 'Which CSS selector is used to select all elements with a specific class?',
      options: ['.class', '#id', '*', 'element.class'],
      correctAnswer: '.class',
    },
    {
      question: 'What is the purpose of the CSS z-index property?',
      options: ['Controls the transparency of an element', 'Specifies the order of an element along the z-axis', 'Defines the zoom level of an element', 'Sets the shadow of an element'],
      correctAnswer: 'Specifies the order of an element along the z-axis',
    },
    {
      question: 'Which CSS property is used to add shadows to text?',
      options: ['text-shadow', 'box-shadow', 'shadow', 'font-shadow'],
      correctAnswer: 'text-shadow',
    },
    {
      question: 'In CSS, what does the "opacity" property control?',
      options: ['Text decoration', 'Element visibility', 'Font weight', 'Border thickness'],
      correctAnswer: 'Element visibility',
    },
    {
      question: 'What is the CSS pseudo-class used to select the last child of an element?',
      options: [':last', ':child', ':last-child', ':nth-child'],
      correctAnswer: ':last-child',
    },
    {
      question: 'Which CSS property is used to set the background color of an element?',
      options: ['background-color', 'color', 'bgcolor', 'background'],
      correctAnswer: 'background-color',
    },
    
  ];

  const jsQuestions = [
    {
      question: 'What does JavaScript stand for?',
      options: ['Java Source Code', 'Jumbled Style Code', 'JavaScript', 'Java Syntax Code'],
      correctAnswer: 'JavaScript',
    },
    {
      question: 'Which of the following is NOT a JavaScript data type?',
      options: ['Number', 'Boolean', 'String', 'Float'],
      correctAnswer: 'Float',
    },
    {
      question: 'What is the purpose of the "typeof" operator in JavaScript?',
      options: ['To determine the type of a variable or expression', 'To create a new variable', 'To define a function', 'To compare two values'],
      correctAnswer: 'To determine the type of a variable or expression',
    },
    {
      question: 'What is the correct way to declare a variable in JavaScript?',
      options: ['let x = 10;', 'var x = 10;', 'const x = 10;', 'int x = 10;'],
      correctAnswer: 'const x = 10;',
    },
    {
      question: 'How do you comment out a single line of code in JavaScript?',
      options: ['// Comment', '<!-- Comment -->', '/** Comment **/', '/* Comment */'],
      correctAnswer: '// Comment',
    },
    {
      question: 'What is the purpose of the "addEventListener" method in JavaScript?',
      options: ['To remove an event listener', 'To add a new HTML element', 'To handle events like clicks or keypresses', 'To create a new function'],
      correctAnswer: 'To handle events like clicks or keypresses',
    },
    {
      question: 'Which built-in method is used to return the length of an array in JavaScript?',
      options: ['count()', 'length()', 'size()', 'getLength()'],
      correctAnswer: 'length()',
    },
    {
      question: 'What does the "NaN" value represent in JavaScript?',
      options: ['Not a Number', 'Null', 'Negative', 'No Assignment'],
      correctAnswer: 'Not a Number',
    },
    {
      question: 'Which operator is used for strict equality comparison in JavaScript?',
      options: ['==', '===', '=', '!=='],
      correctAnswer: '===',
    },
    {
      question: 'What does the "this" keyword refer to in JavaScript?',
      options: ['Current function', 'Global object', 'Previous function', 'Current object or context'],
      correctAnswer: 'Current object or context',
    },
    
  ];
  
  
  
  function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userSelections, setUserSelections] = useState(Array(questionsData.length).fill(''));
    const [correctAnswers, setCorrectAnswers] = useState(null);
    const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);
  
    const handleOptionSelect = (option) => {
      console.log('Selected Option:', option);
  
      const updatedSelections = [...userSelections];
      updatedSelections[currentQuestion] = option;
      setUserSelections(updatedSelections);
  
      setIsNextButtonDisabled(false);
    };
  
    const handleNextQuestion = () => {
      if (currentQuestion < questionsData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setIsNextButtonDisabled(true);
      } else {
        const newCorrectAnswers = questionsData.reduce(
          (acc, question, index) => (userSelections[index] === question.correctAnswer ? acc + 1 : acc),
          0
        );
  
        setCorrectAnswers(newCorrectAnswers);
      }
    };
  
    const progress = ((currentQuestion + 1) / questionsData.length) * 100;
  
    return (
      <div>
        <Navbar />
        <div className='text-[--text] quiz__container flex flex-col p-8 md:flex-row items-center justify-around'>
          {correctAnswers !== null ? (
            <QuizResults correctAnswers={correctAnswers} totalQuestions={questionsData.length} />
          ) : (
            <>
              <div className='quiz__question text-center md:text-left mb-8 md:mb-0 md:mr-10'>
                <h2 className='text-1xl md:text-1xl'>Question {currentQuestion + 1 + " Of 10"}</h2>
                <p className='mt-2 text-3xl md:w-3/4'>{questionsData[currentQuestion].question}</p>
                <div className='mt-4'>
                  <progress className='rounded-full w-1/2' value={progress} max='100' />
                  <p className='text-sm'>Progress: {progress}%</p>
                </div>
              </div>
              <div className='flex flex-col gap-4 w-full md:w-1/2'>
                {questionsData[currentQuestion].options.map((option, index) => (
                  <div
                    key={index}
                    className={`card flex items-center ${
                      userSelections[currentQuestion] === option ? 'bg-purple' : 'bg-[--card]'
                    } text-white rounded-lg shadow-md p-4 md:p-8 mb-4 md:mb-0 w-full cursor-pointer`}
                    onClick={() => handleOptionSelect(option)}
                  >
                    <label htmlFor={`option${index}`} className='cursor-pointer'>
                      {option}
                    </label>
                  </div>
                ))}
                <button
                  className={`w-full text-center p-4 md:p-7 mt-4 bg-purple rounded-lg transition-opacity ${
                    isNextButtonDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80'
                  }`}
                  onClick={handleNextQuestion}
                  disabled={isNextButtonDisabled}
                >
                  {currentQuestion < questionsData.length - 1 ? 'Next Question' : 'Finish Quiz'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
  
  export default Quiz;