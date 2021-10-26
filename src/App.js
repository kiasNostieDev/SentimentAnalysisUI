import './App.css';
// import { w3cwebsocket as W3CWebSocket } from "websocket"
// import { useState } from 'react'
import { Api } from '@mui/icons-material';
import ManualCheck from './components/ManualCheck';

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
      <ManualCheck />
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
