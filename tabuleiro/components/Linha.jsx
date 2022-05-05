import style from "../styles/Linha.module.css";
import SubDivisao from "./SubDivisao";

export default function Linha(props) {
  return (
    <div className={style.linha}>
      <SubDivisao preta={props.preta} />
      <SubDivisao preta={!props.preta} />
      <SubDivisao preta={props.preta} />
      <SubDivisao preta={!props.preta} />
      <SubDivisao preta={props.preta} />
      <SubDivisao preta={!props.preta} />
      <SubDivisao preta={props.preta} />
      <SubDivisao preta={!props.preta} />
    </div>
  );
}
