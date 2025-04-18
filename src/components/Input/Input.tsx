import InputProps from "./InputPropsTypes";
export default function Input({ label, onChangeEvent, name }: InputProps) {
  return (
    <div id="user-input">
      <label>{name}</label>
      <input
        type="number"
        onChange={(e) => {
          onChangeEvent(e.target.value, label);
        }}
      />
    </div>
  );
}
