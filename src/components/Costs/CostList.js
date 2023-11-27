import CostItem from './CostItem';
import './CostList.css';

const CostList = (props) => {
  if (props.costs.length === 0) {
    return <h1 className='cost-list__fallback'>This year was no expenses!</h1>;
  }
  return (
    <ul className='cost-list'>
      {props.costs.map((cost) => (
        <CostItem
          key={cost.id}
          date={cost.date}
          name={cost.name}
          amount={cost.amount}
        />
      ))}
    </ul>
  );
};

export default CostList;
