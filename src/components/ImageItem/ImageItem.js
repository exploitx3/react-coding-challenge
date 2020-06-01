import React, { useState, useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import placeholder from '../../../challenge/assets/placeholder.png'
const ImageItem = ({imageSrc, title}) => {
  // throw new Error('fail')

  return (

      <S.Item>
        <S.Image src={imageSrc}/>

        <S.Title>{title}</S.Title>
      </S.Item>
  )
}

const S = {
  Item: styled.span`
     width: 130px;
     height: 195px;
     display: flex;
     flex-direction: column;
     margin: 50px;
     
  `,
  Image: styled.img`
    width: 100%;
    height: 100%;
`,
  Title: styled.p`
    color: #1e1e1e;
    margin-top: 25px;
  `
}

export default ImageItem