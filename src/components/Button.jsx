
export default function Button({ handleTaskModal, children, className, }){
    return(
        <button onClick={handleTaskModal} className={className}>
         {children}
        </button>
    )
}