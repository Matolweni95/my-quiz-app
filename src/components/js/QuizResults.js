import React from 'react';
import { Link } from 'react-router-dom';

const QuizResults = ({ correctAnswers, totalQuestions }) => {

  const retake = ()=> {
    window.location.reload();
  }
  return (
    <div className=''>
      <h1 className='text-5xl md:text-1xl'>Quiz completed</h1>
      <h2 className='text-3xl md:text-1xl'>You scored...</h2>
      <div className='quiz-results text-center mt-8 bg-[--card] shadow-md p-8 rounded-lg'>
        <h1 className='text-9xl text-bold'>{`${correctAnswers}`}</h1>
        <p className='text-lg'>{'Out of ' + `${totalQuestions}`}</p>
        <div className='flex flex-col gap-8 mt-6'>
         
          <button onClick={()=> retake()} className='text-center p-4 bg-purple rounded-lg'>Re-take Quiz</button>

          <Link to='/'>
            <button className='w-full text-center p-4 bg-purple rounded-lg'>Take Another Quiz</button>
          </Link>

        </div>
      </div>  
    </div>
  );
};

export default QuizResults;
