import DiagramBar from './DiagramBar';
import './Diagram.css';

const Diagram = (props) => {
  
  const dataSetsValues = props.dataSets.map(dataSet => dataSet.value);
  console.log(dataSetsValues);
  const maxMonthCosts = Math.max(...dataSetsValues);
  console.log(maxMonthCosts);

  return (
    <div className='diagram'>
      {console.log(props.dataSets)}
      {props.dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          value={dataSet.value}
          maxValue={maxMonthCosts}
          label={dataSet.label}
        />
      ))}
    </div>
  );
};

export default Diagram;
