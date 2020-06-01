import React, { Fragment } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import styled from 'styled-components'
import placeholder from '../../../challenge/assets/placeholder.png'
import { Link, withRouter } from 'react-router-dom'

const Home = ({history}) => {


  return (
    <Fragment>
      <PageHeader title={'Popular Titles'}/>
      <S.Main>
        <S.Row>
          <S.Item onClick={() => {
            history.push('/series')
          }}>            <S.Box>
              <S.PlaceHolder/>
              <S.Title>Series</S.Title>
            </S.Box>
            <S.UnderTitle>Popular Series</S.UnderTitle>
          </S.Item>
          <S.Item onClick={() => {
            history.push('/movies')
          }}>
              <S.Box>
                <S.PlaceHolder/>
                <S.Title>Movies</S.Title>
              </S.Box>
            <S.UnderTitle>Popular Movies</S.UnderTitle>
          </S.Item>
        </S.Row>
      </S.Main>
    </Fragment>
  )
}

const S = {
  Main: styled.main`
    padding: 25px 100px;
    margin-bottom: 50px;
  `,
  Row: styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;  
    height: 230px;
    width: 100%;
  `,
  Item: styled.span`
     width: 130px;
     height: 100%;
     display: flex;
     flex-direction: column;
     margin-right: 35px;
  `,
  Box: styled.span`
    display: block;
    background: #1e1e1e;
    position: relative;
    flex-grow: 1;
    cursor: pointer;
  `,
  PlaceHolder: styled.i`
    background: url(${placeholder});
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  `,
  Title: styled.p`
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    position: absolute;
    font-size: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

  `,
  UnderTitle: styled.p`
    color: #1e1e1e;
    margin-top: 25px;
  `

}

export default withRouter(Home)