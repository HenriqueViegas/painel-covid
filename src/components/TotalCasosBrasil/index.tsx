import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import styles from './styles.module.scss';

// interface caseProps {
//   cases: number;
// }

export function TotalCasosBrasil() {
  const [cases, setCases] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [recovered, setRecovered] = useState([]);

  useEffect(() => {
    api.get('/historical/brazil')
      // .then(response => setCases(response.data.timeline.cases));
      // .then(response => setCases(Object.keys(response.data.timeline.cases).pop()));
      // .then(response => console.log(response.data.timeline.cases[Object.keys(response.data.timeline.cases).pop()]));
      .then(response => console.log(response.data.timeline));
  }, []);

  useEffect(() => {
    api.get('/historical/brazil')
      .then(response => setDeaths(response.data.timeline.deaths));
  }, []);

  useEffect(() => {
    api.get('/historical/brazil')
      .then(response => setRecovered(response.data.timeline.recovered));
  }, []);

  console.log(Object.values(cases).pop());
  return (
    <div className={styles.container}>
      <div className={styles.contentBrasil}>
        <h2>Brasil</h2>
        <div className={styles.groupBrasil}>
          <div className={styles.overview}>
            <div>
              <p>Total casos</p>
              <h3>{Object.values(cases).pop()}</h3>
            </div>
            <div>
              <p>Total mortes</p>
              <h3>{Object.values(deaths).pop()}</h3>
            </div>
            <div>
              <p>Total recuperados</p>
              <h3>{Object.values(recovered).pop()}</h3>
            </div>
          </div>
          <div className={styles.overviewMes}>
            <div>
              <p>Casos no mês</p>
              <h3>130.000.000</h3>
            </div>
            <div>
              <p>Mortes/mês</p>
              <h3>600.000</h3>
            </div>
            <div>
              <p>Vacinados/mês</p>
              <h3>5.000.000</h3>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.contentMundo}>
        <h2>Mundo</h2>
        <div className={styles.groupMundo}>
          <div className={styles.overview}>
            <div>
              <p>Total casos</p>
              <h3>500.000.000</h3>
            </div>
            <div>
              <p>Total mortes</p>
              <h3>12.000.000</h3>
            </div>
            <div>
              <p>Total vacinados</p>
              <h3>12.000.000</h3>
            </div>
          </div>
          <div className={styles.overviewMes}>
            <div>
              <p>Casos no mês</p>
              <h3>500.000.000</h3>
            </div>
            <div>
              <p>Mortes/mês</p>
              <h3>12.000.000</h3>
            </div>
            <div>
              <p>Vacinados/mês</p>
              <h3>12.000.000</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}