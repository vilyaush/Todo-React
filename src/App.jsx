import './App.css';
import PhoneInput from './PhoneInput';
import Todo from './Todo';
import TodoFilter from './TodoFilter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todo/>
        <TodoFilter/>
        <PhoneInput/>
      </header>
    </div>
  );
}

export default App;

