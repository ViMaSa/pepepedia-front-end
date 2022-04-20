import { useState, useEffect } from "react";
import SinglePepeContainer from "../classyPepeContainer/singlePepeContainer/singlePepeContainer";

const PepeContainer = () => {
  const [pepes, setPepes] = useState([]);
  const getPepes = async () => {
    const getPepeApiResponse = await fetch('http://localhost:8000/api/pepe');
    const parsedPepes = await getPepeApiResponse.json();
    setPepes(parsedPepes);
  }
  
  return (
    <div>
      <h2>Pepe Container</h2>
      <button onClick={getPepes}>Get Pepes</button>
      { pepes.map((pepe) => {
        return <SinglePepeContainer pepe={pepe} key={`pepe-${pepe.id}`}></SinglePepeContainer>
      })
      }
    </div>
  )
}

export default PepeContainer;