const NewPepeComponent = (props) => {
  return (
    <div>
      <h5>Create a new pepe</h5>
      <form onSubmit={props.createNewPepe}>
        Title: <input type="text" onChange={props.handleNewPepeInputChange} name="title"/>
        <br /> <br />
        Image Link: <input type="text" onChange={props.handleNewPepeInputChange} name="img"/>
        <br /> <br />
        Mood: <input type="text" onChange={props.handleNewPepeInputChange} name="mood"/>
        <br /> <br />
        About: <input type="text" onChange={props.handleNewPepeInputChange} name="about"/>
        <br /> <br />
        {/* Pepo? <input type="checkbox" onChange={props.handleNewPepeInputChange} name="pepo"/> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default NewPepeComponent;