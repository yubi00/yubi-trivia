import React from 'react'
import { AnswerObject } from '../App'
import { QuestionCardWrapper, ButtonWrapper } from './QuestionCard.styles'

interface Props {
  question: string
  answers: string[]
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void
  userAnswer: AnswerObject | undefined
  questionNr: number
  totalQuestions: number
}

const QuestionCard = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions
}: Props) => {
  return (
    <QuestionCardWrapper>
      <p className='number'>
        Question: {questionNr}/{totalQuestions}
      </p>
      <p className='question' dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer, i) => (
          <ButtonWrapper
            key={i}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
          >
            <button
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </QuestionCardWrapper>
  )
}

export default QuestionCard
