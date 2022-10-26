import React, { useState, Fragment } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {

  // Markdown' useState method
  const [markdown, setMarkdown] = useState('More info here : https://www.markdownguide.org/cheat-sheet/')

  // Markdown Handler Arrow Function
  const markdownHandler = (event) => {
    setMarkdown(event.target.value)
  }

  return (
    <Fragment>
      {/* markdown */}
      <section className="markdown">
        {/* input */}
        <textarea className="input" value={markdown} onChange={markdownHandler}></textarea>
        {/* result */}
        <article className="result">
          {/* Markdown Result */}
          <ReactMarkdown>
            {markdown}
          </ReactMarkdown>
        </article>
      </section>

    </Fragment>
  )
}

export default App
