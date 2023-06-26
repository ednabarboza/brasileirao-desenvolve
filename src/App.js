import React, { useState, useEffect } from "react";
import "./App.css";
import Classificacao from "./Componentes/Classificacao";
import Partidas from "./Componentes/Partidas";
import { FaTrophy, FaFutbol } from "react-icons/fa";
import axios from "axios";

function App() {
  const [secaoAtiva, setSecaoAtiva] = useState("classificacao");
  const [dadosSecao, setDadosSecao] = useState([]);

  const handleSecaoClick = (secao) => {
    setSecaoAtiva(secao);
  };

  useEffect(() => {
    const client = axios.create({
      baseURL: "https://api.api-futebol.com.br/v1/campeonatos/10/tabela",
      headers: { Authorization: "Bearer live_f0e40a722b1cd723c76f6c151ae3eb" },
    });
    client.get().then((response) => {
      console.log(response.data);
      setDadosSecao(response.data);
      console.log("dadosSecao", dadosSecao);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Brasileirão 2023</h1>
        <div className="botoes-secao">
          <button
            className={secaoAtiva === "classificacao" ? "ativo" : "inativo"}
            onClick={() => handleSecaoClick("classificacao")}
          >
            <FaTrophy className="icone-trofeu" />
            Classificação
          </button>

          <button
            className={secaoAtiva === "partidas" ? "ativo" : "inativo"}
            onClick={() => handleSecaoClick("partidas")}
          >
            <FaFutbol className="icone-bola" />
            Partidas
          </button>
        </div>

        {secaoAtiva === "classificacao" && <Classificacao dados={dadosSecao} />}
        {secaoAtiva === "partidas" && <Partidas partidas={dadosSecao} />}
      </header>
    </div>
  );
}

// function App() {
//   const [secaoAtiva, setSecaoAtiva] = useState("classificacao");
//   const [dadosSecao] = useState([]);

//   const handleSecaoClick = (secao) => {
//     setSecaoAtiva(secao);
//   };

//   useEffect(() => {
//     const client = axios.create({
//       baseURL:
//         "https://api.api-futebol.com.br/v1/campeonatos/{campeonato_id}/tabela",
//       headers: { Authorization: "Bearer test_291958cc2cf8805155267395148aea" },
//     });
//     client.get().then((response) => {
//       console.log(response.data);
//     });
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Brasileirão 2023</h1>
//         <div className="botoes-secao">
//           <button
//             className={secaoAtiva === "classificacao" ? "ativo" : "inativo"}
//             onClick={() => handleSecaoClick("classificacao")}
//           >
//             <FaTrophy className="icone-trofeu" />
//             Classificação
//           </button>

//           <button
//             className={secaoAtiva === "partidas" ? "ativo" : "inativo"}
//             onClick={() => handleSecaoClick("partidas")}
//           >
//             <FaFutbol className="icone-bola" />
//             Partidas
//           </button>
//         </div>

//         {secaoAtiva === "classificacao" && <Classificacao dados={dadosSecao} />}
//         {secaoAtiva === "partidas" && <Partidas partidas={dadosSecao} />}
//       </header>
//     </div>
//   );
// }

export default App;
