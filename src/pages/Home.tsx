import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    if( newTaskTitle.length === 0 ){
      return;
    }

    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }

    setTasks(oldState => [...oldState,newTask]);
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    const prevTasks = tasks;
    const doneTask = prevTasks.find( task => task.id === id);
    if(doneTask){
      const DoneTask = {
        id: doneTask.id,
        title: doneTask.title,
        done: true
      }

      const tasksWithoutChosenOne = prevTasks.filter( task => task.id !== id);
      // console.log(DoneTask);
      setTasks([...tasksWithoutChosenOne,DoneTask])
    }
    
   
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    // usar o filter pra pegar todos que não seja a task com aquele determinado ID
    const prevTasks = tasks;
    const tasksWithoutID = prevTasks.filter( task => task.id !== id);
    setTasks([...tasksWithoutID]);
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}