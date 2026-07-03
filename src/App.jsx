import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sign from './Component/Sign'
import Signup from './Component/Signup'
import RegisterBusiness from './Component/Registerbusiness'
import BankInformation from './Component/BankInformation'



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<RegisterBusiness />} />
        <Route path="/bank" element={<BankInformation />} />
      </Routes>
    </div>
  )
}

export default App