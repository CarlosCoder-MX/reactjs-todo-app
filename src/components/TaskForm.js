import { useState } from "react";

function TaskForm() {
     
    const [taskName,setTaskName] = useState('');

    return(
        <form>
        <button>
          +
        </button>
        <input 
        type='text'
        value={taskName}
        onChange={ev => setTaskName(ev.target.value)}
        placeholder={"Your next task..."} />
      </form>
    );
}

export default TaskForm;