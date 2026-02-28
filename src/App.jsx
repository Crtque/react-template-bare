import { Routes, Route } from "react-router";
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
