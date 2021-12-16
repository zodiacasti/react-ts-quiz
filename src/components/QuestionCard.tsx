import React from 'react';
import { AnswerObject } from '../App';
import {Wrapper, ButtonWrapper} from './QuestionCard.styles';

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

export const QuestionCard: React.FC<Props> = ({
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNr, 
    totalQuestions
}) => (
    <Wrapper>
        <p className='number'>Qustion: {questionNr} / {totalQuestions}</p>
        <p dangerouslySetInnerHTML={{ __html: question}}/>
        <div>
            {answers.map(answer => (
                <ButtonWrapper
                 key={answer}
                 correct={userAnswer?.correctAnswer === answer}
                 userClicked={userAnswer?.answer === answer}
                 >
                    <button disabled={!!userAnswer} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}}></span>
                    </button>
                </ButtonWrapper>
            ))}
        </div>
    </Wrapper>
);