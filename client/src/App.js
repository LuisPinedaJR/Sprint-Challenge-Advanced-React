import React from 'react'
import axios from 'axios'
import './App.scss'
import Navbar from './components/Navbar'
import PlayerList from './components/PlayerList'

import Chart from './components/Chart'

//testing jest function
export const add = (num1, num2) => {
  return num1 + num2
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [''],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players').then(res => {
      const data = res.data
      this.setState({ data })
      console.log('data', data)
      console.log('res', res)
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <PlayerList data={this.state.data} />
        <Chart data={this.state.data} />
      </div>
    )
  }
}

export default App
