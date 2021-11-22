import React from 'react'
import styled, { css } from 'styled-components'
import Button from './Button';

const Intro = styled.div`
  margin-top: 4em;
  text-align: center;
  color: #64E986;
`;

const btnCSS = css`
    
    `;


const Start = ({props}) => {

    const startQuiz = () => props(true)
 
    return (
        <Intro>
            <img src="https://media.istockphoto.com/vectors/quiz-time-banner-with-colorful-brush-strokes-vector-id1031369974?k=20&m=1031369974&s=170667a&w=0&h=Bh2IzCU5XrDx73zLWp8HFrwYkL3GaHDocV-QhnWB6ug=" />
            <h1>Trade Brain</h1>
            <h4>ARE YOU READY!!</h4>
            <Button onClick={startQuiz} css={btnCSS}>START</Button>
        </Intro>
    )
}

export default Start