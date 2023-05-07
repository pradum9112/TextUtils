
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react';
import Alert from './components/Alert';

function App() {
  const [mode,setMode] = useState('light');
  const[alert,setAlert]=useState(null);
   
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.background = 'rgb(142 142 163)'
      showAlert("Dark mode has enabled","success")
      document.title ='textUtils-Dark Mode';
    }
    else{
      setMode('light')
      document.body.style.background = 'White'
      showAlert("Light mode has enabled","success")
      document.title ='textUtils-Light Mode';

    }
  }

  return (
    <>
{/* <Navbar title="textUtils" aboutText="aboutTextUtils"/>  */}
{/* <Navbar/>  */}

<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/> 
<Alert alert={alert}/>
<div className="container my-3">               
            <Textform showAlert={showAlert} heading='Enter the text to Analyse'/>
{/* <About/> */}
        </div>
    </>
  );
}
export default App;




