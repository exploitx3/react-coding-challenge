import React from 'react'
import styled from 'styled-components'
import {withRouter} from 'react-router-dom'

const Header = ({history}) => {


  return (
    <S.Wrapper>
      <S.LeftSide>
        <S.Title onClick={() => {
          history.push('/')
        }}>DEMO Streaming</S.Title>
      </S.LeftSide>
      <S.RightSide>
        <S.LoginButton>
          Log in
        </S.LoginButton>
        <S.FreeTrialButton>
          Start your free trial
        </S.FreeTrialButton>
      </S.RightSide>

    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    width: 100%;
    background: linear-gradient(#0096ff, #006aff);
    display: flex;
    padding: 10px 150px;
    justify-content: space-between;  
    box-sizing: border-box;
    height: 60px;
    align-items: center;
    color: white;
    
  `,
  LeftSide: styled.aside`
    
  `,
  Title: styled.h1`
    line-height: 60px;
    font-size: 1.5em;
    font-weight: bold;
    cursor: pointer;
  `,
  LoginButton: styled.span`
    
  `,
  FreeTrialButton: styled.span`
    background: #444444;
    border-radius: 4px;
    padding: 10px;
  `,

  RightSide: styled.aside`
    display: flex;
    flex-basis: 25%;
    justify-content: space-between;
    align-items: center;
  `,

}

export default withRouter(Header)