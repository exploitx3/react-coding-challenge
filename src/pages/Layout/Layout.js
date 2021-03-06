import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Home/Home'
import Series from '../Series/Series'
import Movies from '../Movies/Movies'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styled from 'styled-components'
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary'

const Layout = () => {


  return (
    <S.Wrapper>

      <Header/>
      <S.Main>
        <ErrorBoundary>

          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/movies">
              <Movies/>
            </Route>
            <Route exact path="/series">
              <Series/>
            </Route>

            <Route>
              <Home/>
            </Route>
          </Switch>

        </ErrorBoundary>
      </S.Main>

      <Footer/>

    </S.Wrapper>

  )
}

const S = {
  Wrapper: styled.div`
    height: 100%; 
    
    position: relative;
    padding-bottom: 184px;
    
`,
  Main: styled.div`
    height: 100%;
    overflow-x: scroll;
 `
}

export default Layout