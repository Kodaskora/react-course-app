import './Costs.css';
import Card from '../UI/Card';
import CostFilter from '../CostFilter/CostFilter';
import { useState } from 'react';
import CostList from './CostList';
import CostsDiagram from './CostsDiagram';

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState('2021');

  const changeYearHandler = (inputYear) => {
    setSelectedYear(inputYear);
  };

  const filteredCosts = props.costs.filter(
    (cost) => cost.date.getFullYear().toString() === selectedYear
  );

  return (
    <div>
      <Card className='costs'>
        <CostFilter year={selectedYear} onChangeYear={changeYearHandler} />
        <CostsDiagram costs={filteredCosts}/>
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
};

export default Costs;
