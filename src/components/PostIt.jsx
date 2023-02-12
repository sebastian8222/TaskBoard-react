import { useContext } from "react";
import { TaskContext } from "../context//TaskContext";

function PosIt({ task }) {
  const { deleteTask } = useContext(TaskContext);
  const { taskState } = useContext(TaskContext);
  const {addTask} = useContext(TaskContext);


  return (
        
    <div className=" flex ">
      {/* bg-gray-800 text-white p-6 rounded-xl ---------- block shadow-lg bg-gray-800 text-white p-6 rounded-xl max-w-sm*/}
      <div className=" flex-wrap shadow-2xl bg-gray-800 text-white p-7 rounded-xl ">
        <h1 className="text-xl font-bold ">{task.taskDesc}</h1>
        <hr />

        <div className="space">
          <button
            className="px-2 py-1 mt-7"
            onClick={() => deleteTask(task.id)}
          >
            <img src="https://cdn-icons-png.flaticon.com/512/6096/6096937.png" height = "25" width='25'></img>
          </button>
          
          <button type="button"
          className="px-4 py-1  mt-3"
            onClick={() => taskState(task)}
          >
            <img src="https://cdn-icons-png.flaticon.com/512/1292/1292906.png" height ="25" width="25" />
  </button>
        </div>
      </div>
    </div>
  );
}

export default PosIt;
