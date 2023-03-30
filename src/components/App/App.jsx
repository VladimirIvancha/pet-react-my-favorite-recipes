import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App