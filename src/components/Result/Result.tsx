import Table from "../Table/Table";
import ResultProps from "./ResultPropsType";
import { calculateInvestmentResults } from "../../utility";
enum ResultValues {
  YEAR = "Year",
  INVESTMENT_VALUE = "Investment Value",
  INTEREST = "Interest(Year)",
  TOTAL_INTEREST = "Total Interest",
  INVESTED_CAPITAL = "Invested Capital",
}

export default function Result({ renderValue }: ResultProps) {
  const values = calculateInvestmentResults(renderValue);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>{ResultValues.YEAR}</th>
          <th>{ResultValues.INVESTMENT_VALUE}</th>
          <th>{ResultValues.INTEREST}</th>
          <th>{ResultValues.TOTAL_INTEREST}</th>
          <th>{ResultValues.INVESTED_CAPITAL}</th>
        </tr>
      </thead>
      <tbody>
        <Table values={values} />
      </tbody>
    </table>
  );
}
