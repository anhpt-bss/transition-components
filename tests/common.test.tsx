import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { Transitions } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<Transitions mode='scale-up-center' />)
  })
})
