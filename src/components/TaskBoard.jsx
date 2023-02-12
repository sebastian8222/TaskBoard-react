import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import PostIt from "./PostIt";

function TaskBoard(taskS) {
  const { addTask } = useContext(TaskContext);
  const { taskState } = useContext(TaskContext)

  return (
    <div className="p-7 py-3 grid grid-cols-4 gap-4 mx-2">
      
          {addTask.map((task) => (
            <PostIt key={task.id} task={task}/>
          ))}
        <br/>
    </div>
    
  );
}

export default TaskBoard;
