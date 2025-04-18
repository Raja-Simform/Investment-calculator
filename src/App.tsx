import Input from "./components/Input/Input";
import Header from "./components/Header/Header";
import { useState } from "react";
import Result from "./components/Result/Result";
import InputValuesTypes from "./AppTypes";
import {InputNames,InputValues} from './constants/typesOfInput.constant'
function App() {
  const [inputValue, setInputValue] = useState<InputValuesTypes>({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });
  function handleInputChange(value: string, label: string) {
   
    setInputValue((prev) => ({
      ...prev,
      [label]: Number(value),
    }));
  }
 
  return (
    <main>
      <Header />
      <div className="input-group">
        <Input
          name={InputNames.INITIAL_INVESTMENT}
          label={InputValues.INITIAL_INVESTMENT}
          onChangeEvent={handleInputChange}
        />
        <Input
          name={InputValues.ANNUAL_INVESTMENT}
          label={InputValues.ANNUAL_INVESTMENT}
          onChangeEvent={handleInputChange}
        />
        <Input
          name={InputValues.EXPECTED_RETURN}
          label={InputValues.EXPECTED_RETURN}
          onChangeEvent={handleInputChange}
        />
        <Input
          name={InputValues.DURATION}
          label={InputValues.DURATION}
          onChangeEvent={handleInputChange}
        />
      </div>
      <Result renderValue={inputValue} />
    </main>
  );
}

export default App;
