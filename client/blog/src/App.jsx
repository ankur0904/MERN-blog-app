import './App.css';
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import Signup from './components/Signup';
import SignupPage from './pages/SignupPage';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<IndexPage />} />
          <Route path={'/login'} element={<LoginPage />} />
          <Route path={'/signup'} element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
