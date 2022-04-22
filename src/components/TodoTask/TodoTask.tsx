
import { ITask } from '../../Interfaces';
import './styles.css'

import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';








interface TaskProps {
    task: ITask,
    desc: string,
    deleteTask(DeleteTaskById: number, DeleteDesc: string): void,
}


function TodoTask( {task, desc, deleteTask}: TaskProps ) {
	 
	return (
		// <div className="card">
		// 	{/* <div>
        //         <p>{task.nameTask}</p> 
               
        //     </div>

        //     <div>
        //         {task.desc}
        //     </div> */}

        //     <div className="line2" >
        //     {/* <span className="btn-card" onClick={() => deleteTask(task.id, task.desc)}>X</span> */}
        //     </div>   
		// </div>

        <div id='containerCard'>
            <Card id='cardStyle'>
                <CardBody id='cardBodyStyle'>
                    <CardTitle id='cardTitleStyle'>{task.nameTask}</CardTitle>
                    {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                    <CardText id='cardTextStyle'>{task.desc}</CardText>
                    <Button id='cardBtnStyle' className="btn-card" onClick={() => deleteTask(task.id, task.desc)} >X</Button>
                </CardBody>
            </Card>
        </div>
	);
}

export default TodoTask;
