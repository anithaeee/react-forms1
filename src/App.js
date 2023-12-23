import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';
function App() {
  const[value,setvalue]= useState(""); 
  const[email,setemail] = useState("");
  const[password,setpassword]= useState([]);
  const[age,setage] = useState([]);

  const handleSubmit = (val)=>{
      let prevData=value;
      prevData.push(val);
      setvalue(prevData);
      console.log("form got submitted" +value);
  }
  return (
    <div className="App">
      <h2>Login From</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:
          <textarea type="text" value={email} onChange={(e)=>setemail(e.target.value)}></textarea>
        </label>
        <div>
        <label>password:
          <textarea type="text" value={password} onChange={(e)=>setpassword(e.target.value)}></textarea>
        </label>
        </div>
        <div>
        <label>age:
          <textarea type="text" value={age} onChange={(e)=>setage(e.target.value)}></textarea>
        </label>
        </div>
        <input  className="btnCls" type='submit' value="Submit"></input>
      </form>
    </div>
  );
}

export default App;
