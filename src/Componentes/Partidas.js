import React from "react";
import JsonData from "../mocks/partidas.json";

function Partidas() {
  const { partidas } = JsonData;

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Resultados</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {partidas.map((partida) => (
            <tr key={partida.partida_id}>
              <td>
                <img src={partida.time_mandante.escudo} />
              </td>
              <td>{partida.placar}</td>
              <td>
                <img src={partida.time_visitante.escudo} />
              </td>
            </tr>
          ))}
          ;
        </tbody>
      </table>
    </div>
  );
}

export default Partidas;
