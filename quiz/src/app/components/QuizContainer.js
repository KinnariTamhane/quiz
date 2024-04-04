// import PropTypes from 'prop-types'
// import { useEffect } from 'react';
import {useState } from 'react';
import topic from '../apis/topic';
import QnaContainer from './QnaContainer';
import React, { memo } from 'react'


const QuizContainer = memo(() => {
  let [selectedTopic, setselectedTopic] = useState('');
  const [topicdata, setTopicData] = useState('');
  let topicNumber;

  let selectedTopicNumber = {
    'general knowlegde' : '9',
    'movies' : '11',
    'science & computer' : '18',
    'animals' : '27',
    'animations & cartoons' : '32',
  }

  // call API function
  const callData = (optionSelected) => {
    setselectedTopic(optionSelected);
      topicNumber = selectedTopicNumber[optionSelected];
      getData(topicNumber);
      document.getElementById('topic').setAttribute('disabled','true');
  }

  // get API function
  const getData = async (topicNumber) =>{
      try {
        const response = await topic(topicNumber);
        if (response?.status === 200) {
          setTimeout(() => {
            setTopicData(response.data.results);
          }, 800);
        }
        else {
          console.log('error from API');
        }
      } catch (error) {
        console.log('error', error);
      }
  }



  return (
    <div id="quiz" className='quiz-container bg-black h-[650px]'>
         <div className="">
            <h1 className="pt-[100px] text-white flex justify-center text-[50px] pb-5">Quiz Master</h1>
            <form className="flex justify-center pb-[70px]">
                <select className="text-black px-5 py-3 pl-4 w-[90%] md:w-[40%] focus:outline-none"
                 name="topic"
                 id="topic"
                 value={selectedTopic}
                  onChange={e => callData(e.target.value)}> 
                    <option value="" defaultValue={`select`} disabled>Select</option>
                    <option value="general knowlegde">General Knowledge</option>
                    <option value="movies">Movies</option>
                    <option value="science & computer">Science & Computer</option>
                    <option value="animals">Animals</option>
                    <option value="animations & cartoons">Animations & Cartoons</option>
                </select>
            </form>
            {
              topicdata.length &&
                  <QnaContainer
                    data = {topicdata ||''}
                  />
            }
           
         </div>
    </div>  
  )
})

QuizContainer.propTypes = {}

export default QuizContainer