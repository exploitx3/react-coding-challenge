import React from 'react'
import styled from 'styled-components'

const PageHeader = ({title}) => {


  return (
    <S.Wrapper>
      <S.LeftSide>
        <S.Title>{title}</S.Title>
      </S.LeftSide>

    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    width: 100%;
    background: #414141;
    display: flex;
    padding: 10px 150px;
    justify-content: flex-start;  
    box-sizing: border-box;
    height: 60px;
    align-items: center;
    color: white;
    
  `,
  LeftSide: styled.aside`
    
  `,
  Title: styled.h2`
    line-height: 60px;
    font-size: 1.2em;
    font-weight: bold;
    color: white;
  `,

}

export default PageHeader