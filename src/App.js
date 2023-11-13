//import React from 'react';
import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';

const App = () => {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: 'Saldytuvas',
      amount: 999.99,
    },
    {
      date: new Date(2021, 11, 25),
      description: 'MacBook',
      amount: 1245.71,
    },
    {
      date: new Date(2021, 4, 1),
      description: 'Jeens',
      amount: 48.99,
    },
  ];

  // return (
  //   React.createElement('div', {}, React.createElement('h1', {}, 'Start React'), React.createElement(Costs, {costs}))
  // );

  return (
    <div>
      <NewCost />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
