export default interface InputProps{
    label:string;
    onChangeEvent:(value:string,label:string)=>void;
    name:string;
}