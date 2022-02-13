import { Button } from '@mui/material';
import React from 'react'

interface ButtonProps {
    primary : boolean;
    label : string;
}

const Button1 = (props : ButtonProps) => {
    const comp = props.primary ? <Button variant="contained" sx={{}}>{props.label}</Button> : <Button variant="outlined" >{props.label}</Button>
  return (
    <div>
        {comp}
    </div>
  )
}

export default Button1;
