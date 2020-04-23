import React, { PureComponent } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

function Chart(props) {
  return (
    <AreaChart
      width={500}
      height={400}
      data={props.data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="searches"
        stroke="#8884d8"
        fill="#8884d8"
      />
    </AreaChart>
  )
}

export default Chart

//data.map(e => setData([...data, {x: e.name, y: e.searches}]))
