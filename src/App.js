import { Route, Routes } from 'react-router-dom'
//import Home from './components/Home'
//import About from './components/About'
import Contact from './components/Contact'
//import Layout from './components/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Contact />}>
          <Route index element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App