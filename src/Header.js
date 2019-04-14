import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const SiteTitle = styled.h1`
  margin: 6px 0 0;
`

const SubTitle = styled.span`
  margin: 0 0 10px;
`

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <SiteTitle>
          <a href="/">Vimalraj Selvam</a>
        </SiteTitle>
        <SubTitle>Let's learn together</SubTitle>
      </LogoContainer>
    </HeaderContainer>
  )
}

export default Header
