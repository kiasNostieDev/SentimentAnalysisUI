import './App.css';
import { w3cwebsocket as W3CWebSocket } from "websocket"
import { useState } from 'react'

const client = new W3CWebSocket('ws://127.0.0.1:8000')
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
      <div className='instantplace'></div>
    </div>
  );
}

export default App;
