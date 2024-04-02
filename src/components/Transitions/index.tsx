import React, { ReactNode } from 'react'
import './style.scss'

interface Props {
  className?: string
  children?: ReactNode
  mode?: string
}

const Transitions: React.FC<Props> = ({ className = '', children, mode = '' }) => {
  return <div className={`transition-components ${className} ${mode}`}>{children}</div>
}

export default Transitions
