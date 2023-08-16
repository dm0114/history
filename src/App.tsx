import './App.css'
import {Route, Routes} from "react-router-dom";
import Log from './words/Log';
import WordDetails from './words/WordDetails';
import Words from './words/Words';
import SignUp from './auth/SignUp';
import Login from './auth/Login';

function App() {

  // react - firebase 연결
  // frontend - 기존 코드 가져오기 (그 카메라 어플 코드)
  // 로그인은 gmail로
  // 라우팅 - 기존 
  return (
    <Routes>      
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/words" element={<Words/>}/>
      <Route path="/words/:id" element={<WordDetails/>}/>
      <Route path="/words/:id/log" element={<Log/>}/>
      <Route path="*" element={<h1>404 Not Found</h1>}/>
    </Routes>
  )
}

export default App
