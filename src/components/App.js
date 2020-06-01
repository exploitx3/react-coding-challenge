/* eslint-disable import/no-named-as-default */
// import Header from './stateless/Header/Header'
// import HomePage from './stateless/HomePage/HomePage'
// import Dashboard from './stateful/Dashboard/Dashboard'
// import AppLayout from './stateful/AppLayout/AppLayout'
// import NotFoundPage from './stateless/NotFound/NotFoundPage'
import PropTypes from 'prop-types'
import React from 'react'
import { hot } from 'react-hot-loader'
import Layout from '../pages/Layout/Layout'
import { createGlobalStyle } from 'styled-components'
import { Reset } from 'styled-reset'
// import styled, { keyframes } from 'styled-components'
import styled from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html, body, #app{
    font-family: 'Raleway', sans-serif;
    margin: 0px;
    font-size: 18px;
    min-width: 100%;
    
    height: 100%;
  

/* include border and padding in element width and height */

  }  
* {
  box-sizing: border-box;
}  
  
   #nprogress .bar {
      background: red !important;
    }
  
    #nprogress .peg {
        box-shadow: 0 0 10px red, 0 0 5px red !important;
    }
  
    #nprogress .spinner-icon {
        border-top-color: red !important;
        border-left-color: red !important;
    }
`

// import HOC from './common/HOCs/HOCs'

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' }

    return (
      <S.Wrapper>
        <Reset/>
        <GlobalStyles/>

        <Layout/>
      </S.Wrapper>
    )
  }

  static propTypes = {
    children: PropTypes.element

  }
}

const S = {
  Wrapper: styled.div`
    height: 100%;
  `
}

export default hot(module)(App)
