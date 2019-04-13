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
  color: #000;
`

const SubTitle = styled.span`
  margin: 0 0 10px;
`

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
`

const NavItem = styled.span`
  padding: 0 10px 0 10px;
  color: #000;
`

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <SiteTitle>Vimalraj Selvam</SiteTitle>
        <SubTitle>Let's learn together</SubTitle>
      </LogoContainer>
      <Nav>
        <NavItem>Twitter</NavItem>
        <NavItem>Github</NavItem>
      </Nav>
    </HeaderContainer>
  )
}

export default Header
