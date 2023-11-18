import CostItem from './CostItem';
import './Costs.css';
import Card from '../UI/Card';
import CostFilter from '../CostFilter/CostFilter';
import { useState } from 'react';

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState('2021');

  const changeYearHandler = (inputYear) => {
    setSelectedYear(inputYear);
  };

  return (
    <div>
      <Card className='costs'>
        <CostFilter year={selectedYear} onChangeYear={changeYearHandler} />
        <CostItem
          date={props.costs[0].date}
          name={props.costs[0].name}
          amount={props.costs[0].amount}
        />
        <CostItem
          date={props.costs[1].date}
          name={props.costs[1].name}
          amount={props.costs[1].amount}
        />
        <CostItem
          date={props.costs[2].date}
          name={props.costs[2].name}
          amount={props.costs[2].amount}
        />
      </Card>
    </div>
  );
};

export default Costs;
