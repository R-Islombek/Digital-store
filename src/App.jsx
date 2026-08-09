import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Home/Homepage";
import './App.css';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;