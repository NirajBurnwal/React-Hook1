import React, {useState} from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ChangeTitle = () => {
    const [title, setTitle] = useState('Advance React Tutorial')
    const clickHandler = () => {
        title == 'Advance React Tutorial'? setTitle('Stay Focused! You have long way to Go😉'):setTitle('Advance React Tutorial')
    }
    return(
        <>
         <h1>{title}</h1>
         <Button variant="contained" onClick={()=>clickHandler()}>Change Title</Button>
        </>
    )
}

export default ChangeTitle