import React , {useState} from "react";
import { Tasklist, TasklistContainer, TaskModal } from "./components/Tasks";
import Button from './components/Button'
import { flushSync } from "react-dom";
export default function App() {
  const [text, setText] = useState('')
  const [todolist, setTodolist] = useState([])
  const [isOpen, setIsopen] = useState(false)
  return (
    <div className="app__container"> 
      <h3 className="app__title">TODOLIST</h3>
      <div className="modal__container">
      <Button className={'button'} handleTaskModal={() => setIsopen(true) }> Add Task</Button>

      <TaskModal handleInput={(event) => setText(event.target.value)} text={text} open={isOpen} onClose={() => { setIsopen(false)}} 
        addtask={( ) => {
          if(!text){
            setIsopen(false)
            return
          }
          setTodolist([...todolist, text])
          setText('')
          console.log(todolist)
          setIsopen()
        }}
        />
      <Button className={'filter__button'}> ALl</Button>
      </div>
      
      <TasklistContainer>
        {todolist.map((todo, index) =>{
          return(
            <Tasklist message={todo} key={index}/>
          )
        })}
      </TasklistContainer>

    </div>
  )
}

/*      
*/