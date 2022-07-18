
import './App.css';
import CounterDisplay from './components/CounterDisplay';
import CounterIncrement from './components/CounterIncrement';
import ChangeCounter from './components/ChangeCounter';

function App() {
  return (
    <div>
      <CounterDisplay/>
      <CounterIncrement/>
      <ChangeCounter />
    </div>
  );
}

export default App;
