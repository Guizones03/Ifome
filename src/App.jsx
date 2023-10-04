import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import CardRegister from './components/RegisterPage/RegisterPage'
import CardHome from './components/AcessPage/AcessPage'
import CardLogin from './components/LoginPage/CardLogin'
import CardMain from './components/cardMain/CardMain'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="register" element={<CardRegister/>}/>
          <Route path="/" element={<CardHome/>}/>
          <Route path="/login" element={<CardLogin/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
