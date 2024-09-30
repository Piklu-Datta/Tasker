/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import SearchTask from '../SearchTask/SearchTask';
import TaskAction from '../TaskAction/TaskAction';
import TaskList from '../TaskList/TaskList';
import AddTaskModal from '../AddTaskModal/AddTaskModal';
import NoTaskFound from '../NoTaskFound/NoTaskFound';

const TaskBoard = () => {
    const defaultTask = {
        'id':crypto.randomUUID(),
        'title':"Learn React",
        "description":"I want to learn react such that I can treat it like my slave and make it do whatever I want to do",
        "tags":["web","react","js"],
        "priority":"High",
        "isFavorite":false

    }
    const[task,setTask] = useState([defaultTask]);
    const [addModal,setAddModal] = useState(false);
    const [taskToUpdate,setTaskToUpdate] = useState(false);

    const handleAddEditTask = (newTask,isAdd)=>{
        if(isAdd)
        {
            setTask([...task,newTask])
        }
        else
        {
           setTask(
            task.map((task)=>{
                if(task.id=== newTask.id)
                {
                    return newTask;
                }
                else
                {
                    return task;
                }
            })
           )
        }
        setAddModal(false);
    }
    
    const handleTaskEdit = (task)=>{
         setTaskToUpdate(task);
         setAddModal(true);
    }

    const handleDeleteTask = (taskId)=>{
            const taskAfterDelete = task.filter((task)=>task.id!=taskId);
            setTask(taskAfterDelete)

    }

    const handleAllDelete = ()=>{
        task.length=0;
        setTask([...task]);
    }
    const handleFavorite = (taskId)=>{
          const taskIndex = task.findIndex((task)=>task.id==taskId)
         const newTask =[...task];
          newTask[taskIndex].isFavorite = !newTask[taskIndex].isFavorite;
          setTask(newTask);
        }

    const handleSearch = (searchTerm)=>{
         console.log(searchTerm);
         const filtered = task.filter((task)=>
            task.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setTask([...filtered]);
    } 

   const handleCloseClick = ()=>{
    setAddModal(false);
    setTaskToUpdate(null);
   }
    return (
        <section className="mb-20" id="tasks">
		 {
            addModal && <AddTaskModal onCloseClick={handleCloseClick} taskToUpdate={taskToUpdate}  onSave={handleAddEditTask}/>
         }
		<div className="container">
			
		<div className="p-2 flex justify-end">
		   <SearchTask onSearch={handleSearch}/>
		</div>
	
			<div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
				<TaskAction onDeleteAllClick={handleAllDelete} onAddClick={()=>setAddModal(true)}/>
				{
                    task.length>0 ? (
                        <TaskList onFav={handleFavorite} onDelete={handleDeleteTask} task={task} onEdit={handleTaskEdit}/>
                    ):(
                        <NoTaskFound/>
                    )
                }
			</div>
		</div>
	</section>
    );
};

export default TaskBoard;