import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'


function App() {
  return (
    <div >
     
      <Routes> 
          <Route exact path = '/' element = {<Login/>}/>
         <Route exact path='/signup' element={<SignUp />} />
        </Routes>
</div>)
}
export default App;
