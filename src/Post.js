import React from 'react'
import styled from 'styled-components'

const ContentContainer = styled.div`
  display: flex;
`

const MainContent = styled.div`
  width: 75%;
`

const Card = styled.div`
  background-color: #fff;
  padding: 25px;
  margin-bottom: 10px;
  border: 1px solid #f3f3f3;
  box-shadow: 0 5px 22px -5px rgba(122, 122, 122, 0.1);
`

const Aside = styled.aside`
  width: 25%;
`

const AsideCard = styled.div`
  background-color: #fff;
  border: 1px solid #f3f3f3;
  margin: 0 0 20px 1.5em;
  box-shadow: 0 5px 22px -5px rgba(122, 122, 122, 0.1);
`

const AsideContent = styled.div`
  padding: 15px;
`

const AsideTitle = styled.h2`
  background-color: #ff8871;
  color: #fff;
  margin: 0;
  padding: 20px 25px;
  text-transform: uppercase;
`

const InputBox = styled.input`
  border: 1px solid #ff8871;
  border-radius: 2px;
  padding: 6px 12px;
  box-shadow: none;
  width: 100%;
  transition: all 0.3s ease-in-out;
  font-family: 'Roboto', sans-serif;
  font-size: inherit;
  letter-spacing: 1px;
`

const Button = styled.button`
  background-color: #ff8871;
  color: #fff;
  border: 1px solid #ff8871;
  border-radius: 2px;
  padding: 8px 20px;
  letter-spacing: 1px;
  font-family: 'Roboto', sans-serif;
  font-size: inherit;
  margin-top: 10px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`

const LinkButton = styled.a`
  background-color: #ff8871;
  color: #fff;
  border: 1px solid #ff8871;
  border-radius: 2px;
  padding: 8px 20px;
  letter-spacing: 1px;
  font-family: 'Roboto', sans-serif;
  font-size: inherit;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #ff8871;
    transition: all 0.3s ease-in-out;
  }
`

const PostContent = styled.p`
  margin-bottom: 25px;
`

function Post() {
  return (
    <ContentContainer>
      <MainContent>
        <Card>
          <h1>
            <a href="/">
              Form in Modal using React hooks – mistakes and lesson learnt
            </a>
          </h1>
          <PostContent>
            Recently, I’ve stumbled upon a problem while building a Form in the
            Modal box. I would like to share that experience and believe it
            might help. Modal and Portals I wanted to create a modal which can
            show some content or the form. The best way to create a modal in
            React is to use Portal. Because, the modal should
          </PostContent>
          <PostContent>
            Recently, I’ve stumbled upon a problem while building a Form in the
            Modal box. I would like to share that experience and believe it
            might help. Modal and Portals I wanted to create a modal which can
            show some content or the form. The best way to create a modal in
            React is to use Portal. Because, the modal should
          </PostContent>
          <PostContent>
            Recently, I’ve stumbled upon a problem while building a Form in the
            Modal box. I would like to share that experience and believe it
            might help. Modal and Portals I wanted to create a modal which can
            show some content or the form. The best way to create a modal in
            React is to use Portal. Because, the modal should
          </PostContent>
          <PostContent>
            Recently, I’ve stumbled upon a problem while building a Form in the
            Modal box. I would like to share that experience and believe it
            might help. Modal and Portals I wanted to create a modal which can
            show some content or the form. The best way to create a modal in
            React is to use Portal. Because, the modal should
          </PostContent>
          <PostContent>
            Recently, I’ve stumbled upon a problem while building a Form in the
            Modal box. I would like to share that experience and believe it
            might help. Modal and Portals I wanted to create a modal which can
            show some content or the form. The best way to create a modal in
            React is to use Portal. Because, the modal should
          </PostContent>
          <PostContent>
            Recently, I’ve stumbled upon a problem while building a Form in the
            Modal box. I would like to share that experience and believe it
            might help. Modal and Portals I wanted to create a modal which can
            show some content or the form. The best way to create a modal in
            React is to use Portal. Because, the modal should
          </PostContent>
          <PostContent>
            Recently, I’ve stumbled upon a problem while building a Form in the
            Modal box. I would like to share that experience and believe it
            might help. Modal and Portals I wanted to create a modal which can
            show some content or the form. The best way to create a modal in
            React is to use Portal. Because, the modal should
          </PostContent>
          <PostContent>
            Recently, I’ve stumbled upon a problem while building a Form in the
            Modal box. I would like to share that experience and believe it
            might help. Modal and Portals I wanted to create a modal which can
            show some content or the form. The best way to create a modal in
            React is to use Portal. Because, the modal should
          </PostContent>
        </Card>
      </MainContent>
      <Aside>
        <AsideCard>
          <AsideContent>
            <form>
              <InputBox placeholder="Search..." />
              <Button type="submit">Search</Button>
            </form>
          </AsideContent>
        </AsideCard>
        <AsideCard>
          <AsideTitle>Categories</AsideTitle>
          <AsideContent>
            <p>
              <a href="#">React</a>
            </p>
            <p>
              <a href="#">Reporting</a>
            </p>
          </AsideContent>
        </AsideCard>
        <AsideCard>
          <AsideTitle>Subscribe</AsideTitle>
          <AsideContent>
            <p>
              Enter your email address to subscribe to this blog and receive
              notifications of new posts by email.
            </p>
            <p>Join Now!</p>
            <form>
              <InputBox placeholder="Email Address..." />
              <Button type="submit">Subscribe</Button>
            </form>
          </AsideContent>
        </AsideCard>
      </Aside>
    </ContentContainer>
  )
}

export default Post
