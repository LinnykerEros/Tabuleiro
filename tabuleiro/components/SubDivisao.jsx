import styles from "../styles/SubDivisao.module.css";

export default function SubDivisao(props) {
  return (
    <div
      style={{
        backgroundColor: props.preta ? "black" : "white",
      }}
      className={styles.subdivisao}
    ></div>
  );
}
