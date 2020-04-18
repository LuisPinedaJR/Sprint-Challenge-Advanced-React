import React from 'react'
import * as rtl from '@testing-library/react'
import PlayerList from './PlayerList'

test('renders PlayerList Component without crashing', () => {
  rtl.render(<PlayerList />)
})
