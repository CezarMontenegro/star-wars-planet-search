import React, { useEffect, useContext } from 'react';
import { PlanetsContext } from '../context/ContextProvider';

interface Props {
  filter: string;
}

function Table({ filter }: Props) {
  const { data, setData } = useContext(PlanetsContext);

  async function fetchData() {
    const result = await (await (fetch('https://swapi-trybe.herokuapp.com/api/planets/'))).json();
    setData(result.results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {
            data.filter((planet) => planet.name.toLowerCase()
              .includes(filter.toLowerCase()))
              .map((planet) => (
                <tr key={ planet.name }>
                  <td>{ planet.name }</td>
                  <td>{ planet.rotation_period }</td>
                  <td>{ planet.orbital_period }</td>
                  <td>{ planet.diameter }</td>
                  <td>{ planet.climate }</td>
                  <td>{ planet.gravity }</td>
                  <td>{ planet.terrain }</td>
                  <td>{ planet.surface_water }</td>
                  <td>{ planet.population }</td>
                  <td>{ planet.films }</td>
                  <td>{ planet.created }</td>
                  <td>{ planet.edited }</td>
                  <td>{ planet.url }</td>
                </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
