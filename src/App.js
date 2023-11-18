import React, { useState } from 'react';
import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';

const App = () => {

  const costs = [
    {
      id: 'c1',
      date: new Date(2021, 2, 12),
      name: 'Saldytuvas',
      amount: 999.99,
    },
    {
      id: 'c2',
      date: new Date(2021, 11, 25),
      name: 'MacBook',
      amount: 1245.71,
    },
    {
      id: 'c3',
      date: new Date(2021, 4, 1),
      name: 'Jeens',
      amount: 48.99,
    },
  ];

  // return (
  //   React.createElement('div', {}, React.createElement('h1', {}, 'Start React'), React.createElement(Costs, {costs}))
  // );
  const addCostDataHandler = (inputCostData) => {
    console.log(inputCostData);
  }

  return (
    <div>
      <NewCost onAddCostData={addCostDataHandler}/>
      <Costs costs={costs} />
    </div>
  );
}

export default App;
