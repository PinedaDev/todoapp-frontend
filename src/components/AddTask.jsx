import { useState } from 'react'

const AddTask = ({ onAdd }) => {

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("progress");


    const onSubmit = (e) => {
        e.preventDefault()

        if (!title) {
            alert("Please add a title")
        }

        onAdd({ title, date })

        setTitle("")
        setDate("")
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='form-controll'>
                <label htmlFor='title'>Task Title</label>
                <input
                    type="text"
                    name="task title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    id="title"
                    placeholder='Add a task title' />
            </div>
            <div className='form-controll'>
                <label htmlFor='title'>Task date</label>
                <input
                    type="text"
                    name="task date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    id="title"
                    placeholder='Add a task date' />
            </div>
            <input type="submit" />
        </form>
    )
}

export default AddTask