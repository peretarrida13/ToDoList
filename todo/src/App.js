import React from 'react';
import {FiTrash} from 'react-icons/fi';

function App() {
  const [list, setList] = React.useState([]);
  const task = React.useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const container = task.current;

    const newList = [...list, container.value];
    setList(newList);

    task.current.value = '';
  }
  
  React.useEffect(() => {
    const container = task.current;
    container.focus();
  }, []);

  const removeTask = (task) => {
    const newList = list.filter((t) => t !== task);
    setList(newList);
  }

  const changeStyle = (index) => {
    const style = document.getElementById(index).classList;
    if(style[0] === 'task'){
      style.remove('task');
      style.add('checked');
    } else{
      style.add('task');
      style.remove('checked');
    }
  }

  return (
    <div className='main-body'>
      <div className='header'>
        <h1>TO DO LIST</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' ref={task} className='input' placeholder='ENTER TASK'/>
          <button type='submit' className='submit-btn'>Add</button>
        </form>
      </div>
      <ul className='tasks'>
        {list.map((task, index) => {
          return(
            <li key={index} className='task' id={index}>
              <input type="checkbox" onClick={() => changeStyle(index)}/> 
              {task}
              <button type='button' className='remove-btn' onClick={() => removeTask(task)}><FiTrash className='trash'/></button>
            </li>
          );
        })
        }
      </ul>
    </div>
  );
}

export default App;
