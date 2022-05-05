import { Header } from "./components/Header";
import { InfoAtualizacao } from "./components/InfoAtualizacao";
import { TotalCasosBrasil } from "./components/TotalCasosBrasil";

export function App() {
  return (
    <div className="App">
      <Header />
      <InfoAtualizacao />
      <TotalCasosBrasil />
    </div>
  );
}
