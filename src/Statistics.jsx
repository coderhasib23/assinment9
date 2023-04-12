// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// const Statistics = () => {
//     return (
//         <div>
//             <p>statistics</p>
//         </div>
//     );
// };

// export default Statistics;

import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Assignment-1",
    uv: 60,
  },
  {
    name: "Assignment-2",
    uv: 60,
  },
  {
    name: "Assignment-3",
    uv: 50,
  },
  {
    name: "Assignment-4",
    uv: 60,
  },
  {
    name: "Assignment-5",
    uv: 58,
  },
  {
    name: "Assignment-6",
    uv: 60,
  },
  {
    name: "Assignment-7",
    uv: 57,
  },
];

export default function Statistics() {
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid horizontal="true" vertical="" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
