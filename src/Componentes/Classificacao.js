import React from "react";
import JsonData from "../mocks/classificacao.json";

function JsonDataDisplay({ dados }) {
  console.log("Classificação: ", dados);
  const DisplayData = dados.map((info) => {
    return (
      <tr>
        <td>
          <img src={info.time.escudo} />
        </td>
        <td>{info.time.nome_popular}</td>
        <td>{info.posicao}</td>
        <td>{info.pontos}</td>
        <td>{info.vitorias}</td>
        <td>{info.empates}</td>
        <td>{info.derrotas}</td>
        <td>{info.gols_pro}</td>
        <td>{info.gols_contra}</td>
        <td>{info.saldo_gols}</td>
      </tr>
    );
  });

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Time</th>
            <th>Posição</th>
            <th>Pontos</th>
            <th>Vitórias</th>
            <th>Empates</th>
            <th>Derrotas</th>
            <th>Gols</th>
            <th>Gols Contra</th>
            <th>Saldo de Gols</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

// function JsonDataDisplay() {
//   const DisplayData = JsonData.map((info) => {
//     return (
//       <tr>
//         <td>
//           <img src={info.time.escudo} />
//         </td>
//         <td>{info.time.nome_popular}</td>
//         <td>{info.posicao}</td>
//         <td>{info.pontos}</td>
//         <td>{info.vitorias}</td>
//         <td>{info.empates}</td>
//         <td>{info.derrotas}</td>
//         <td>{info.gols_pro}</td>
//         <td>{info.gols_contra}</td>
//         <td>{info.saldo_gols}</td>
//       </tr>
//     );
//   });

//   return (
//     <div>
//       <table className="table">
//         <thead>
//           <tr>
//             <th></th>
//             <th>Time</th>
//             <th>Posição</th>
//             <th>Pontos</th>
//             <th>Vitórias</th>
//             <th>Empates</th>
//             <th>Derrotas</th>
//             <th>Gols</th>
//             <th>Gols Contra</th>
//             <th>Saldo de Gols</th>
//           </tr>
//         </thead>
//         <tbody>{DisplayData}</tbody>
//       </table>
//     </div>
//   );
// }
export default JsonDataDisplay;
