
import { React } from 'react';
import './App.css';

const App=()=>{
  let compnayName = "SatishLabs";
  const courseName = "ReactJS"
  return (
    <div className="myclass">
      <p className="myclass1">Welcome to {compnayName}!!</p>
      <p className="myclass2">You are learning {courseName} from {compnayName}</p>
    </div>
  );
}
export default App;
