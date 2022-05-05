import styles from './styles.module.scss';

export function InfoAtualizacao() {
  return (
    <div className={styles.boxAtualizacao}>
      <span>COVID19</span>
      <p>Informações atualizadas em:</p>
      <time>02/05/2022 08:29</time>
    </div>
  );
}