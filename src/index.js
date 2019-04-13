import React from 'react'
import ReactDOM from 'react-dom'

import Header from './Header'
import Content from './Content'

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Content />
      </main>
      <footer>Footer here</footer>
    </>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
