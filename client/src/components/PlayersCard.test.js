import React from 'react'
import { render } from '@testing-library/react'
import PlayersCard from './PlayersCard'

test('renders without crashing', () => {
  const container = render(<PlayersCard />)
  container.getByText(/name/i)
})
