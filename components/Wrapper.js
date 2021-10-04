import styles from "../styles/Wrapper.module.css";

function Wrapper(props) {
  return <section className={styles.container}>{props.children}</section>;
}

export default Wrapper;
