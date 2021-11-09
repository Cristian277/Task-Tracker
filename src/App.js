import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

//Loads everything in the header file 
//Loads everything in tasks right below header
const App = () => {

  const[showAddTask, setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState([
    {
      id:1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30 pm',
      reminder: true,
    },
    {
      id:2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30 pm',
      reminder: true,
    }
  ])

  const addTask = (task) =>{
    const id = Math.floor(Math.random()*1000) + 1
    const newTask = {id,...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //map is list
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
      task.id === id?{...task,reminder:
        !task.reminder}:task
      )
    )
  }
  //const name = 'Brad' can use inside headers as {name}
  //const x = false can do {x ? 'Yes' : 'No'} ternary operator

  return (
    //Parent Component
    <div className='container'>
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0 ? (
      <Tasks tasks = {tasks} 
      onDelete={deleteTask} onToggle = {toggleReminder}/>
      ):(
        'No Tasks To Show'
      )}
    </div>
  )
}

export default App;
