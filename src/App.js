import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useWindowDimensions from './utils/useWindowDimensions'
import './App.css';

import Navbar from './components/navbar/Navbar'
import Index from './components/home/Index'



function App() {
  const getToken = () => {
    return localStorage.getItem('token')
  }
  const getUserCard = () => {
    return JSON.parse(localStorage.getItem("userCard"))
  }



  // setup app state
  const [isDark, setIsDark] = useState(false)
  const [token, setUserToken] = useState(getToken())
  const [userCard, setUserCard] = useState(getUserCard())
  const [apiBase] = useState('http://3.120.11.152:8863')
  const { height, width } = useWindowDimensions();

  // navbar status 
  const [isVisibleNav, setIsVisibleNav] = useState(true)


  // function to get css class name base  on the isDark variable TODO set break points
  const getCls = baseName => {
    // dark and light classes
    let className = isDark ? baseName + ' ' + baseName + '-dark' : baseName + ' ' + baseName + '-light'
    // xs class
    width < 400 ? className = className + ' ' + baseName + '-' + 'xs' : className = className
    // lg class
    1000 <= width ? className = className + ' ' + baseName + '-' + 'lg' : className = className
    return className
  }

  const p = {
    isDark, setIsDark,
    apiBase, getCls,
    width, height,
    token, setUserToken,
    userCard, setUserCard,
    isVisibleNav, setIsVisibleNav
  }


  return (< Router >
    <div className={getCls('app')}>

      <Navbar p={p} />

      <Switch>
        <Route exact path="/">
          {token && <Index p={p} />}
          {!token && get404()}
        </Route>
      </Switch>

    </div>
  </Router >)
}

function get404() {

  return (
    <div className="404">
      <div className="404-icon">
        <i className="fas fa-fingerprint"></i>
      </div>
      Not Allowed to come here
    </div>
  )
}


export default App;
