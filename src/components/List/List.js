import React, { useState, useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const List = (props) => {


  return (
    <S.List>
      {props.children}
    </S.List>
  )
}

const S = {
  List: styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 100%;
  `
}

export default List