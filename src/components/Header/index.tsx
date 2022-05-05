import styles from './styles.module.scss';
import logoImg from '../../assets/logo.png';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div>
          <img src={logoImg} alt="logo com 3 barras inclinadas de cor azul claro, rosa e azul escuro" />
          <h1>Covid News</h1>
        </div>

        <nav>
          <a>Geral</a>
          <a>Previsões</a>
          <a>Notícias</a>
          <a>Sobre</a>
        </nav>
      </div>
    </header>

  );
}