const UpdatePepeComponent = (props) => {
  return (
    <div>
      <h4>Update {props.pepe.title}</h4>
      <form onSubmit={(e)=>{e.preventDefault(); props.updatePepe(props.pepe.id)}}>
        Title: <input type="text" onChange={props.handleUpdatePepeInputChange} name="title"/>
        <br /> <br />
        Image Link: <input type="text" onChange={props.handleUpdatePepeInputChange} name="img"/>
        <br /> <br />
        Mood: <input type="text" onChange={props.handleUpdatePepeInputChange} name="mood"/>
        <br /> <br />
        About: <input type="text" onChange={props.handleUpdatePepeInputChange} name="about"/>
        <br /> <br />
        {/* Pepo? <input type="checkbox" onChange={props.handleUpdatePepeInputChange} name="pepo"/> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UpdatePepeComponent;