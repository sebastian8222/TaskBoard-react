import TasksForm from "./components/TasksForm";
import TaskBoard from "./components/TaskBoard";
import { TaskContextProvider } from "./context/TaskContext";

function App() {
  return (
    <main className=' h-auto p-7 bg-gradient-to-r from-slate-700  to-cyan-500 '> 
      <div className="">
      <TasksForm/>
      <TaskBoard/>
      </div>
    </main>
  );
}

export default App;
