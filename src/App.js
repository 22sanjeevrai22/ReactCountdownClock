import logo from './logo.svg';
import './App.css';
import useTimer from './hooks/useTimer';
import{useState} from 'react'

function App() {
  return <TimerClock/>;
}

function TimerClock(){

  const [number, setNumber] = useTimer(false, 50);
  console.log(number)

  // if (number > 0){
  //     setNumber(prev => prev --)
  //  }

  const giveAboveValue = (value) => {
    
    // const [number, setNumber] = useTimer(false, value);
  }

 return( 
  <>
  <ClockTitle/>
  <InputNum giveAboveValue={giveAboveValue}/> 
  </>
 )

}

function ClockTitle(){
  return(
    <>
    <h2>Countdown Clock</h2>
    </>
  );
}

function InputNum({giveAboveValue}){

  const[value, setValue] = useState();

    const handleValue =(event)=>{
        const countValue = event.target.value;
    setValue((_) => countValue)
    }

    const submitValue = () =>{
        giveAboveValue(value)
        setValue((prev)=>'')
    }

  return(
    <>
    <input placeholder='Input time in seconds' onChange={handleValue}></input>
    <button onClick={submitValue}>Start</button>
    </>
  )
}
 
export default App;
