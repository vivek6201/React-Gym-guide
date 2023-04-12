import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import ExerciseDetailPage from './Pages/ExerciseDetailPage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {

  return (
    <div className="w-full h-screen">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/exercises/:exerciseId' element={<ExerciseDetailPage />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
