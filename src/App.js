import './App.css'
import styled from 'styled-components'

import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Login from './components/Login'
import Chat from './components/Chat'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import db from './firebase.js'
import { useEffect, useState } from 'react'
import { auth, provider } from './firebase.js'

function App() {

  const [rooms, setRooms] = useState([])
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const signOut = () => {
    auth.signOut()
    .then(() => {
      setUser(null)
      localStorage.removeItem('user')
    })
  }

  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
       setRooms(snapshot.docs.map((doc) => {
        return {id: doc.id, name:doc.data().name}
       }))
    })
  }

  useEffect(() => {
    getChannels()
  }, [])

  
  

  return (
    <div className="App">

      <Router>
        {
          !user ?
          <Login setUser={setUser}/> :
        
      <Container>
        <Header user={user} signOut={signOut}/>
        <Main>
          <Sidebar rooms={rooms}/>

          <Switch>

            <Route path="/room/:channelId">
              <Chat user={user}/>
            </Route>

            <Route path="/">
              Select or Create Channel
            </Route> 

          </Switch>
        </Main>
      </Container>

      }
      </Router>

    </div>
  );
}

export default App;

const Container = styled.div`
  width:100%;
  height:100vh;
  display:grid;
  grid-template-rows: 38px minmax(0, 1fr); 
`

const Main = styled.div`
  display:grid;
  grid-template-columns: 260px auto;
`

