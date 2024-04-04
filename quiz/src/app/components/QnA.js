
import React, { Fragment, useEffect } from 'react'

const QnA = ((props) => {

    const {
        data = {},
    } = props;

    let selectedAnswer = (selectedAns) => {
        props.handleCallBack(selectedAns);
    };

    return (
            <Fragment>
                <p className="question text-[24px] mt-[35px]">{data.question}</p>
                <div>
                    
                    {
                    data?.incorrect_answers?.length > 0 &&
                    data?.incorrect_answers?.map((index,i)=>{
                        return(
                            <div  key={i} className="pt-3 inline-flex w-full" >
                                <input
                                    type="radio"
                                    id={i}
                                    name="qna"
                                    value={index}
                                    onClick={() => {
                                        selectedAnswer({index});
                                    }}
                                ></input>
                                <label className={'text-lg'}>{index}</label>
                            </div>
                        )
                    })
                }
                {
                    data.correct_answer &&
                    <div className="pt-3 inline-flex w-full" >
                        <input
                            type="radio"
                            id={'4'}
                            name="qna"
                            value={data.correct_answer}
                            onClick={() => {
                                selectedAnswer(data.correct_answer);
                            }}
                        ></input>
                        <label className={'text-lg'}>{data.correct_answer}</label>
                    </div>
                }
                </div>
            </Fragment>
    );
});

QnA.propTypes = {}

export default QnA