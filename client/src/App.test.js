import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

// test to see if jest is working
// test('Does add work', () => {
//   let num1 = 3
//   let num2 = 3
//   let expected = 6
//   let actual = add(num1, num2)
//   expect(actual).toBe(expected)
// })
