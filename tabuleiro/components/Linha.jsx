import style from "../styles/Linha.module.css";
import SubDivisao from "./SubDivisao";

export default function Linha(props) {
  return (
    <div className={style.linha}>
      <SubDivisao />
      <SubDivisao preta />
      <SubDivisao />
      <SubDivisao preta />
      <SubDivisao />
      <SubDivisao preta />
      <SubDivisao />
      <SubDivisao preta />
    </div>
  );
}
