
import './App.css';
import AddTask from './Components/AddTask';
import ListTasks from './Components/ListTasks';

function App() {
  return (
    <div>
      <h1>WS Redux : ToDo List</h1>
      <AddTask></AddTask>
      <ListTasks></ListTasks>
    </div>
  );
}

export default App;
