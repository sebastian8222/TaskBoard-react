import { useState, useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";

function TasksForm() {
  const { addNewTask } = useContext(TaskContext);
  const { searchTask } = useContext(TaskContext);
  const [taskToFound, setTaskToFound] = useState("") 
  const [taskDesc, setTaskDesc] = useState("");

  const handleSubmit = (e) => {
    // Maneja el evento de envío
    e.preventDefault();
    //localStorage.setItem("tasks", taskDesc);
    addNewTask(taskDesc);
    setTaskDesc("");
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    searchTask(taskToFound);
    setTaskToFound("");
  };

  return (
    <div className=" max-w-fit mx-auto ">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-600 p-10 mb-4 rounded-md"
      >
        <h1 className=" text-2xl font-bold text-white mb-3 ">
          Create your task
        </h1>
        <input
          placeholder="Write your task here"
          value={taskDesc}
          onChange={(e) => setTaskDesc(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2 "
          required
        />

        <button className="bg-slate-500 my-2 px-3 py-1 text-white hover:bg-indigo-400 rounded-md">
          Save task
        </button>
      </form>
      <form onSubmit={handleSubmitSearch}>
        <div className="py-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-100 dark:text-gray-100"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"/>
            <input
              value={taskToFound}
              onChange={(e) => setTaskToFound(e.target.value)}
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-100 rounded-md bg-slate-600"
              placeholder="Search your task"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default TasksForm;
