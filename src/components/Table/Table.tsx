import { formatter } from "../../utility";
import TableProps from "./TablePropsTypes";
export default function Table({ values }: TableProps) {
  let totalinterest = 0;
  return (
    <>
      {values.map((item) => {
        totalinterest += Number(item.interest);

        return (
          <tr key={item.year}>
            <td>{item.year}</td>
            <td>{formatter.format(item.valueEndOfYear)}</td>
            <td>{formatter.format(Number(item.interest))}</td>
            <td>{formatter.format(totalinterest)}</td>
            <td>
              {formatter.format(item.valueEndOfYear - Number(item.interest))}
            </td>
          </tr>
        );
      })}
    </>
  );
}
