import React from 'react'
import ReactDOM from 'react-dom/client'
import { Transitions } from 'transition-components'
import './index.scss'

const basicSlideModes: Array<string> = [
  'slide-top',
  'slide-tr',
  'slide-right',
  'slide-br',
  'slide-bottom',
  'slide-bl',
  'slide-left',
  'slide-tl',
  'slide-bck-center',
  'slide-bck-top',
  'slide-bck-tr',
  'slide-bck-right',
  'slide-bck-br',
  'slide-bck-bottom',
  'slide-bck-bl',
  'slide-bck-left',
  'slide-bck-tl',
  'slide-fwd-center',
  'slide-fwd-top',
  'slide-fwd-tr',
  'slide-fwd-right',
  'slide-fwd-br',
  'slide-fwd-bottom',
  'slide-fwd-bl',
  'slide-fwd-left',
  'slide-fwd-tl',
]

const basicScaleModes: Array<string> = [
  'scale-up-center',
  'scale-up-top',
  'scale-up-tr',
  'scale-up-right',
  'scale-up-br',
  'scale-up-bottom',
  'scale-up-bl',
  'scale-up-left',
  'scale-up-tl',
  'scale-up-hor-center',
  'scale-up-hor-left',
  'scale-up-hor-right',
  'scale-up-ver-center',
  'scale-up-ver-top',
  'scale-up-ver-bottom',
]

const modes: Array<string> = [...basicScaleModes, ...basicSlideModes]

const TransitionComponents = () => {
  const [mode, setmode] = React.useState<string>('scale-up-center')

  const onNextMode = () => {
    const currentModeIndex = modes?.findIndex((item) => item === mode)

    if (currentModeIndex >= modes?.length - 1) {
      setmode(modes[0])
    } else {
      setmode(modes[currentModeIndex + 1])
    }
  }

  return (
    <Transitions mode={mode}>
      <div className='page-container'>
        <div>
          <h3>{mode}</h3>
          <h1 onClick={onNextMode}>👉</h1>
        </div>
      </div>
    </Transitions>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <TransitionComponents />
  </React.StrictMode>,
)
