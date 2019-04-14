import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'

import Header from './Header'
import Content from './Content'
import Post from './Post'

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Router>
          <Content path="/" />
          <Post path="/post" />
        </Router>
      </main>
      <footer>
        <a href="/">twitter</a> . <a href="/">github</a> .{' '}
        <a href="/">linkedin</a>
      </footer>
    </>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
