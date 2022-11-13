import './App.css';
import { useCounter } from './useCounter';

function App() {

  const [state, increment, decrement, setToZero] = useCounter(0);

  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={setToZero}>Set to Zero</button>
    </div>
  );
}

export default App;
