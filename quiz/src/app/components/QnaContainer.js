// import React, { Fragment } from 'react'
import { useState } from 'react';
import { Fragment } from 'react';
import QnA from './QnA';


const QnaContainer = ((props) => {
    const {
        data = {},
    } = props;

    let finalAns = '';

    const [counter,setCounter]= useState(0);
    const [points,setPoints]= useState(1);

    const callBack = (childData) => {
        finalAns = childData;
    }

    const proceed = () =>{
      if(finalAns === data[counter].correct_answer){
        setPoints(points+1);
      }
    }

    return (
            <div className="bg-black px-4 pt-[20px] pb-[30px]">
                <div className=" text-white text-[50px] pb-5 w-[90%] md:w-[50%] my-0 mx-auto">
                    <h1 className="text-[40px] capitalize mb-2 text-center">{data[0]?.category}</h1>
                        <div className="qna text-left h-[450px] md:h-[400px]">
                            {
                                data?.length > 0 &&
                                <Fragment>
                                    <QnA
                                        data={data[counter]}
                                        handleCallBack = {callBack}
                                    />
                                    {
                                        counter < 10 &&
                                        <button 
                                            className={'text-white text-lg border-2 rounded-xl float-right px-4 py-2 absolute right-[%]  md:right-[20%]  w-[100px]'}
                                            onClick={() => 
                                                setCounter((counter + 1),proceed()
                                            )}>
                                                Proceed
                                        </button>
                                    }
                                    {
                                        counter === 10 &&
                                         <p className={'text-xl text-center'}>Your Score Is : {points} </p>
                                    }

                                </Fragment>
                            }

                        </div>
                 </div>
            </div>
    )
})

QnaContainer.propTypes = {}

export default QnaContainer