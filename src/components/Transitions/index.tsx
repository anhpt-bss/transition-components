import React, { ReactNode } from 'react'

interface Prop {
  className?: string
  children?: ReactNode
  mode: string
}

const Transitions: React.FC<Prop> = ({ className, children, mode }) => {
  return <div className={`page-transition ${className} ${mode}`}>{children}</div>
}

export default Transitions
