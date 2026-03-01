import { Routes, Route } from "react-router";
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import { AuthProvider } from './contexts/AuthContext';
import './App.css';
function App() {

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
