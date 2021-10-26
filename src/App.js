import './App.css';
// import { w3cwebsocket as W3CWebSocket } from "websocket"
// import { useState } from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { IconButton } from '@mui/material'
import BubbleChartIcon from '@mui/icons-material/BubbleChart'
import { Api } from '@mui/icons-material';

const Input = styled('input')({
  display: 'none',
});

// const client = new W3CWebSocket('ws://127.0.0.1:8000')
function App() {
  // var msg = ''
  // const [smsg, setSmsg] = useState('no msg')

  // client.onopen = () => {
  //   console.log('opened')
  // }
  // client.onmessage = (message) => {
  //   console.log(message)
  //   setSmsg(message.data)
  // }

  return (
    <div className="App">
      <div className='divider'></div>
      <div className='whoarewe'>ivies</div>
      <div className='whatplace'><div className='whatwedo'>hate Classification on Social Media Content</div></div>
      <div className='elaborate'>We provide this microservice based application to intelligently identify hate content on any deployed media.</div>
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
      <div className='bottomChecks'>
        <div className='bottomTitle'>Architecture Check</div>
        <div className='checkLink'>
          <Api sx={{color: 'green'}} style={{fontSize: '13pt', float: 'left'}}/>
          <div className='checkLinkDesc'>Router API check</div>
        </div>
        <div className='checkLink'>
          <Api sx={{color: 'green'}} style={{fontSize: '13pt', float: 'left'}}/>
          <div className='checkLinkDesc'>Flask API check</div>
        </div>
      </div>
      <div className='go'>Check Request Stream</div>
    </div>
  );
}

export default App;
