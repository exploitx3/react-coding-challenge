import React from 'react'
import styled from 'styled-components'
import fbIconWhite from '../../../challenge/assets/social/facebook-white.svg'
import fbIconBlue from '../../../challenge/assets/social/facebook-blue.svg'
import twitterIconWhite from '../../../challenge/assets/social/twitter-white.svg'
import twitterIconBlue from '../../../challenge/assets/social/twitter-blue.svg'
import instagramIconWhite from '../../../challenge/assets/social/instagram-white.svg'
import instagramIconBlue from '../../../challenge/assets/social/instagram-blue.svg'

import appStore from '../../../challenge/assets/store/app-store.svg'
import playStore from '../../../challenge/assets/store/play-store.svg'
import windowsStore from '../../../challenge/assets/store/windows-store.svg'

const Footer = () => {


  return (
    <S.Wrapper>
      <S.LinksLine>
      <S.LinksContainer>
        <S.Link>
          Home
        </S.Link>
        <S.Link>
          Terms and Conditions
        </S.Link>
        <S.Link>
          Privacy Policy
        </S.Link>
        <S.Link>
          Collection Statement
        </S.Link>
        <S.Link>
          Help
        </S.Link>
        <S.Link>
          Manage Account
        </S.Link>
      </S.LinksContainer>
      </S.LinksLine>
      <S.CopyRightLine>
        Copyright 2016 DEMO Streaming All Rights Reserved
      </S.CopyRightLine>
      <S.MediaLine>
        <S.SocialIcons>
          <S.SocialIconFacebook/>
          <S.SocialIconTwitter/>
          <S.SocialIconInstagram/>
        </S.SocialIcons>
        <S.StoreIcons>
          <S.StoreIcon src={appStore}/>
          <S.StoreIcon src={playStore}/>
          <S.StoreIcon src={windowsStore}/>
        </S.StoreIcons>
      </S.MediaLine>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    width: 100%;
    background: #1e1e1e;
    display: flex;
    flex-direction: column;
    
    padding: 10px 150px;
    justify-content: center;  
    box-sizing: border-box;
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 220px;
    align-items: center;
    color: white;
  `,
  LinksLine: styled.div`
    flex-basis: 30%;
    width: 100%;
  `,
  LinksContainer: styled.ul`
    display: flex;
    width: 100%;
    && li {
      border-right: 2px solid white;
    }
    
    && li:first-child {
      padding-left: 0;
    }
    
    && li:last-child {
      border-right: none;
    }
    
    
  `,
  Link: styled.li`
    color: white;
    padding: 0px 25px;
  `,
  CopyRightLine: styled.p`
    color: white;
    text-align: left;
    width: 100%;
    flex-basis: 30%;

  `,
  MediaLine: styled.div`
    display: flex;
    justify-content: space-between;
    flex-basis: 30%;
    width: 100%;
    
  `,
  SocialIcons: styled.span`
    display: flex;
    justify-content: space-around;
    flex-basis: 30%;
    
    & i {
      width: 35px;
      height: 35px;
    }
  `,
  StoreIcons: styled.span`

    display: flex;
    justify-content: space-evenly;
    flex-basis: 30%;
    
    
    
  `,
  StoreIcon: styled.img`
    width: 135px;
    height: 40px;
    margin-right: 30px;
`,
  SocialIconFacebook: styled.i`
    background: url(${fbIconWhite});
    background-size: 35px 35px;
    cursor: pointer;
    &:hover {
      background: url(${fbIconBlue});
      background-size: 35px 35px;

    }
  `,
  SocialIconTwitter: styled.i`
    background: url(${twitterIconWhite});
    background-size: 35px 35px;
    cursor: pointer;
    &:hover {
      background: url(${twitterIconBlue});
      background-size: 35px 35px;

    }
  `,
  SocialIconInstagram: styled.i`
    background: url(${instagramIconWhite});
    background-size: 35px 35px;
    cursor: pointer;
    &:hover {
      background: url(${instagramIconBlue});
      background-size: 35px 35px;

    }
  `

}

export default Footer
