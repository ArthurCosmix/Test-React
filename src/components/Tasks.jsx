import '../App.css'
import Button from './Button'
export function Tasklist({message  }) {
    if(!message) return 
    return (
            <div className="taklist__item">
                <input type="checkbox" name="items-check" className="items-check"/>
                {message}
            </div>
    )
}

export function TasklistContainer({children}){
    return (
        <div className="tasklist-container">
            {children}
        </div>
    )
}

export function TaskModal( {handleInput, text, open, onClose, addtask} ){
    if(!open) return null
    return(
        <>
        <div className="overlay"></div>
        <div className="taskmoaal__container">
            <input type="text" placeholder='Whats in your mind'   className='taskpop__input'  onChange={handleInput}  value={text}/>
                <div className="taskModal__buttons">
                <button className={'button button__taskpop'} onClick={addtask}>Add task</button>
                <button className={'button button__close'} onClick={onClose}>close</button>
            </div>
        </div>
        </>
    )
}
