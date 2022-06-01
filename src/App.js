import Header from './components/Header.js';
import Tasks from "./components/Tasks";
import {useEffect, useState, Link} from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Detail from "./components/Detail";
import {BrowserRouter,Routes, Route} from "react-router-dom"

function App() {
    const [addTaskButton, setAddTaskButton] = useState(false)
    const [tasks, setTasks] = useState([])

    const fetchData = async()=>{
        const res = await fetch("http://localhost:5000/tasks")
        const data = await res.json()
        return data
    }
    const fetchTask = async(id)=>{
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()
        return data
    }
    useEffect( () => {
        const getTasks = async() => {
          const dataFromServer =  await fetchData()
            setTasks(dataFromServer)
        }
    getTasks()
    },[])


    //add tasks
    const addTasks = async (task) =>{
        const res = await fetch("http://localhost:5000/tasks",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(task)
        })
        const data = await res.json()
        setTasks([...tasks, data])
    }
    //delete tasks
    const deleteTask = (id) => {
        fetch(`http://localhost:5000/tasks/${id}`,{method: "DELETE"})
        setTasks(tasks.filter((task) => (task.id!=id)))
    }

    //toggle tasks
    const toggleTask = async(id) => {
        const modifyTask = await fetchTask(id)
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: "PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({...modifyTask, reminder: !modifyTask.reminder})
        })
        const data = await res.json()
        setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: data.reminder}:task))
    }

  return (

    <div className="container">
        <BrowserRouter>
            <Header onSwitchAddButton={()=>setAddTaskButton(!addTaskButton)} showAdd = {addTaskButton}/>
            <Routes>

                <Route  path='/' element={
                    <>

                        {addTaskButton && <AddTask onAdd={addTasks}/>}
                        {
                            tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle = {toggleTask}/> :"No tasks"
                        }
                        <Footer></Footer>
                    </>
                }>
                </Route>

                <Route path="/detail" element={<Detail/>}/>
            </Routes>
        </BrowserRouter>
    </div>

  );
}
Header.defaultProps = {
    title : "Task Tracker",
}
export default App;
