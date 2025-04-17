import './App.css'
import Input from './components/Input/Input'
import Header from './components/Header/Header'
import { useState } from 'react'
// import Result from './components/Result/Result';
import InputValuesTypes from './AppTypes';


function App() {
  const [inputValue,setInputValue]=useState<InputValuesTypes>({
    initialInvestment:0,
    annualInvestment:0,
    expectedReturn:0,
    duration:0
  })
  function handleInputChange(value:string,label:string){

         setInputValue((prev)=>({
            ...prev,
            [label]:Number(value),
         }))
         console.log(inputValue);
  }
  return (
    <main>
      <Header/>
      <div  className='input-group'>
        <Input name="INITIAL INVESTMENT" label='initialInvestment'  onChangeEvent={handleInputChange}/>
        <Input name="ANNUAL INVESTMENT" label='annualInvestment' onChangeEvent={handleInputChange}/>
        <Input name="EXPECTED RETURN" label="expectedReturn" onChangeEvent={handleInputChange}/>
        <Input name="DURATION" label='duration' onChangeEvent={handleInputChange}/>
      </div>
      {/* <Result renderValue={inputValue}/> */}
    </main>
  )
}

export default App
