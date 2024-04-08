import React, { useEffect } from 'react';
import './List.css';
import SerieItem from './SerieItem';

function ListaSeries() {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    const url = "/datos";

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