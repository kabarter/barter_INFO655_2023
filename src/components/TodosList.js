import React, { useState } from "react";

function TodosList() {
  const [currentTask, setCurrentTask] = useState("");
  const [tasks, setTasks] = useState([

    //sample tasks to appear when app starts
    {
      task: "Wash the car",
      description: "ask kids to do this",
      markComplete: false
    },
    {
      task: "Finish Assignment",
      description: "read last 3 chapters",
      markComplete: false
    },
    {
      task: "Write Report",
      description: "once complete send to VP",
      markComplete: false
    }
  ]);

  
  function deleteTask(index) {
    let tasksArray = [...tasks];
    tasksArray.splice(index, 1);
    setTasks(tasksArray);
  }



  function completeTask(index) {
    let tasksArray = [...tasks];
    tasksArray[index].markCompleted = !tasksArray[index].markCompleted;
    setTasks(tasksArray);
  }

  function createNewTask(currentTask) {
    let tasksArray = [...tasks];
    tasksArray.push({
      task: currentTask,
      markComplete: false
    });
    setTasks(tasksArray);
  }
  return (
    <div>
      {tasks.map((task, index) => (
        <div key={task} className="task">
          <div className="checkbox" onClick={() => completeTask(index)}>
            {task.markCompleted && <span>&#x2714;</span>}
          </div>
          <div className={task.markCompleted ? "done" : ""}>{task.task}</div>
          <div className="delete" onClick={() => deleteTask(index)}>
            &#128465;
          </div>
        </div>
      ))}
      {tasks.length > 0 && `${tasks.length} items`}

      <br />
      <br />

        <input
        className="task-input"
        value={currentTask}
        onChange={e => {
          setCurrentTask(e.target.value);
        }}
        onKeyDown={e => {
          if (e.key === "Enter") {
            createNewTask(currentTask);
            setCurrentTask("");
          }
        }}
        placeholder="Add Task and Hit Enter to Add"
      />  
          
    </div>
  );
}
export default TodosList;