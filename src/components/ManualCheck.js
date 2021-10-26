import { Button, IconButton } from '@mui/material'
import React from 'react'
import BubbleChartIcon from '@mui/icons-material/BubbleChart'
import { styled } from '@mui/material/styles'
import '../App.css';

const Input = styled('input')({
    display: 'none',
});

export default function ManualCheck() {
    return (
        <div className='instantplace'>
            <div className='checkTitle'>Instant Score Check</div>
            <textarea className='sendPut' placeholder='Text Goes Here' />
            <div>
            <div className='sendIns'>You can also manually and instantly check some data and analyse based on our service. Text goes above and Files go below(Images/Video)</div>
            <label htmlFor="contained-button-file">
                <Input id="contained-button-file" type="file" />
                <Button style={{
                width: '80%', marginLeft: '9.5%', marginTop: '5%', backgroundColor: 'rgba(131, 64, 148, 0.185)'
                }} variant="contained" component="span">
                file Upload
                </Button>
            </label>
            </div>
            <IconButton aria-label="delete" style={{ display: 'block', margin: 'auto' }}>
            <BubbleChartIcon sx={{ color: 'crimson' }} style={{fontSize: '40pt', backgroundColor: 'rgba(131, 64, 148, 0.185)', borderRadius: '25%', marginTop: '30%'}} />
            </IconButton>
        </div>
    )
}
