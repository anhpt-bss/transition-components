import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { BasicScale } from './basicScale'
import { BasicSlide } from './basicSlide'
interface Props {
  className?: string
  children?: ReactNode
  mode?: string
}

const Transitions: React.FC<Props> = ({ className = '', children, mode = '' }) => {
  return (
    <TransitionComponents className={`transition-components ${className} ${mode}`}>{children}</TransitionComponents>
  )
}

export default Transitions

export const TransitionComponents = styled('div')`
  ${BasicScale}
  ${BasicSlide}
`
