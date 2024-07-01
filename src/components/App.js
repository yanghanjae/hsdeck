import React from 'react'
import LandingPage from './LandingPage/LandingPage'
import NaviBar from './NaviBar/NaviBar'
import ViewDeck from './ViewDeck/ViewDeck'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
      <NaviBar />
        <Routes >
          <Route path='/' element={<LandingPage />} />
          <Route path='/deck/:deckId' element={<ViewDeck />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
