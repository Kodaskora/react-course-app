import { useState } from 'react';
import CostForm from './CostForm';
import './NewCost.css';

const NewCost = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };

    props.onAddCostData(costData);
  };

  const inputCostDataHandler = (inputCostData=true) => {
    setIsFormVisible(inputCostData);
  };

  if (!isFormVisible) {
    return (
      <div className='new-cost'>
        <button onClick={inputCostDataHandler}>Add New Expenses</button>
      </div>
    );
  }

  return (
    <div className='new-cost'>
      <CostForm onSaveCostData={saveCostDataHandler} onInputCostData={inputCostDataHandler}/>
    </div>
  );
};

export default NewCost;
