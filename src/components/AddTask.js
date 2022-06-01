import React from 'react';
import {useState} from "react";

const AddTask = ({onAdd})=> {
    const [AddText, SetAddTask] = useState("")
    const [AddDay, SetAddDay] = useState("")
    const [AddReminder, SetAddReminder] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()

        if (AddText==""){
            alert("Please add text to Task")
            return
        }
        const text = AddText
        const date = AddDay
        const reminder = AddReminder
        onAdd({text, date, reminder})

        SetAddTask("")
        SetAddDay("")
        SetAddReminder(false)
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label><input type="text" placeholder="Ädd Tasks" value={AddText} onChange={(e)=>{SetAddTask(e.target.value)}}/>
            </div>
            <div className="form-control">
                <label>Day & Time</label><input type="text" placeholder="Ädd Day & Time" value={AddDay} onChange={(e)=>{SetAddDay(e.target.value)}}/>
            </div>
            <div className="form-control-check">
                <label>Set Reminder</label><input type="checkbox" value={AddReminder} onChange={(e)=>{SetAddReminder(e.target.checked)}}/>
            </div>
            <div className="form-control">
                <input type="submit" value="Submit Task" className="btn btn-block"/>
            </div>
        </form>

    );
}

export default AddTask;