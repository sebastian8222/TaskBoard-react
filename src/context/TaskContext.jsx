import { useState, useContext, createContext, useEffect } from "react";
//import swal from 'sweetalert';
import Swal from "sweetalert2";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [addTask, setAddTask] = useState([]);
  const [searched, setSearched] = useState("");

  function addNewTask(task) {
    const tasksToSave = [...addTask];
    tasksToSave.push({ id: addTask.length, taskDesc: task, state: false });
    localStorage.setItem("tasks", JSON.stringify(tasksToSave));
    setAddTask([...tasksToSave]);
    /*
    if (!tasksToSave.find((tasks) => tasks.taskDesc === task)) {
     //setAddTask([...tasksToSave]);
    }else{
      alert('Task already registered')
    }*/

    /*if (!addTask.find((tasks) => tasks.taskDesc === task)) {
      setAddTask(prevState => [...prevState, { id: addTask.length, taskDesc: task, state: false }]);
      
    }*/
  }

  function deleteTask(task) {
    const taskToDelete = [...addTask];
    localStorage.removeItem(task, JSON.stringify(taskToDelete));
    setAddTask([...taskToDelete]);

    /*
    const afterRemove = addTask.findIndex((task) => task.id === taskId);
    setAddTask([...afterRemove])*/
    //(addTask.filter((task) => task.id !== taskId));
  }


  function searchTask(taskDesc) {
    //let taskFound = addTask.filter(element => element===);
    const taskFound = addTask.filter((task) => task.taskDesc === taskDesc);
    const tasksF = JSON.stringify(taskFound);
    setSearched(tasksF);

    const notFoundAlert = () => {
      Swal.fire({
        title: "Oops!!",
        text: "Task not found",
        icon: "question",
        width: 300,
        color: "#232313",
        background: "#EAF2F8",
        showConfirmButton: true,
        confirmButtonText: "OK",
        confirmButtonColor: "#9BC3E0 ",
      });
    };
    const FoundAlert = () => {
      Swal.fire({
        title: JSON.stringify(taskFound),
        width: 300,
        color: "#232313",
        background: "#EAF2F8",
        showConfirmButton: true,
        confirmButtonText: "OK",
        confirmButtonColor: "#9BC3E0",
      });
    };

    if (taskFound.length === 0) {
      notFoundAlert();
    } else {
      FoundAlert();
      console.log(taskFound);
    }
  }

  const taskState = (task) => {
    setAddTask(
      addTask.map((taskS)=>{
        if (taskS.id === task.id) {
          return {...taskS, state: true}
        }
        return taskS
      })
      //addTask.map((ts) => (ts.id === task.id ? { ...ts, state: true }:ts))
      
    )
  }


  useEffect(() => {
    const tasks = localStorage.getItem("tasks");
    if (!tasks) {
      localStorage.setItem("tasks", "[]");

      return;
    }

    const tasksToSave = JSON.parse(tasks);
    setAddTask(tasksToSave);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        addTask,
        addNewTask,
        deleteTask,
        searchTask,
        taskState
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
