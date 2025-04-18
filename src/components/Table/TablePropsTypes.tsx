type TableValue= {
  year: number;
  valueEndOfYear: number;
  interest: string;
  annualInvestment: number;
}
export default interface TableProps {
    values:TableValue[];
}