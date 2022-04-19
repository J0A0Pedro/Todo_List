
import { ITask } from '../../Interfaces';
import './styles.css'

interface TaskProps {
    task: ITask,
    desc: string,
    deleteTask(DeleteTaskById: number, DeleteDesc: string): void,
}


function TodoTask( {task, desc, deleteTask}: TaskProps ) {
	 
	return (
		<div className="card">
			<div>
                <p>{task.nameTask}</p> 
               
            </div>

            <div>
                {task.desc}
            </div>

            <div className="line2" >
            <span className="btn-card" onClick={() => deleteTask(task.id, task.desc)}>X</span>
            </div>
		</div>
	);
}

export default TodoTask;
