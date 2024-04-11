import React, { useEffect, useState } from 'react';
import SerieItem from './SerieItem';

function ListaSeries() {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    const url = "/api/datos";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setSeries(data);
      });
  }, []);

  return (
    <ul id="lista-series">
      {series.map((serie, index) => (
        <SerieItem key={index} serie={serie} index={index} />
      ))}
    </ul>
  );
}

export default ListaSeries;