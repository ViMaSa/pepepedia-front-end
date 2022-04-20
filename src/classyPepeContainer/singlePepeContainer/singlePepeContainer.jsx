import UpdatePepeComponent from "./updatePepeComponent/updatePepeComponent";

const SinglePepeContainer = (props) => {
  return (
    <div>
      <h3>{props.pepe.title}</h3>
      <img src={props.pepe.img} alt={props.pepe.title} className="pepe-image"/>
      <h4>Mood: <span>{props.pepe.mood}</span></h4>
      <h4>About</h4>
      <p>{props.pepe.about}</p>
      <button onClick={()=>{props.deletePepe(props.pepe.id)}}>DELETE {props.pepe.title}</button>
      <UpdatePepeComponent handleUpdatePepeInputChange={props.handleUpdatePepeInputChange} updatePepe={props.updatePepe} pepe={props.pepe}></UpdatePepeComponent>
    </div>
  )
}

export default SinglePepeContainer;