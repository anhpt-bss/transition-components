import React from 'react'
import ReactDOM from 'react-dom/client'
import { Transitions } from 'transition-components'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Transitions mode='scale-up-center'>
      <div className='page-container'>Title</div>
    </Transitions>
  </React.StrictMode>,
)
