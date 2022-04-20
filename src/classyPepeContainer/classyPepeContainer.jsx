import React from "react";
import SinglePepeContainer from "./singlePepeContainer/singlePepeContainer";
import NewPepeComponent from "./newPepeComponent/newPepeComponent";

class ClassyPepeContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      pepes: [],
      newPepe: {
        title: "",
        img: "",
        mood: "",
        about: "",
        pepo: false
      },
      updatePepe: {
        title: "",
        img: "",
        mood: "",
        about: "",
        pepo: false
      }
    }
  }
  handleNewPepeInputChange = (e) => {
    this.setState({
      newPepe: {
        ...this.state.newPepe,
        [e.target.name]: e.target.value,
      }
    })
  }
  createNewPepe = async (e) => {
    e.preventDefault();
    const apiResponse = await fetch("https://ancient-river-64795.herokuapp.com/api/pepe/", {
      method: "POST",
      body: JSON.stringify(this.state.newPepe),
      headers: {
        'Content-Type' : "application/json"
      }
    })
    if(apiResponse.status === 201) {
      const creationResponseParsed = await apiResponse.json()
      this.setState({
        pepes: [...this.state.pepes, creationResponseParsed]
      })
    }
  }
  async getPepes(){
    const getPepeApiResponse = await fetch('https://ancient-river-64795.herokuapp.com/api/pepe/');
    const parsedPepes = await getPepeApiResponse.json();
    this.setState({
      pepes: parsedPepes
    })
  }
  deletePepe = async (idToDelete) => {
    const deleteResponse = await fetch(`https://ancient-river-64795.herokuapp.com/api/pepe/${idToDelete}`, {
      method: "DELETE"
    })
    console.log(deleteResponse.status)
    if(deleteResponse.status === 204){
      this.setState({
        pepes: this.state.pepes.filter(p => p.id !== idToDelete)
      })
    }
  }
  handleUpdatePepeInputChange = (e) => {
    console.log(e.target.value)
    this.setState({
      updatePepe: {
        ...this.state.updatePepe,
        [e.target.name]: e.target.value,
      }
    })
  }
  updatePepe = async (idToUpdate) => {
    const apiResponse = await fetch(`https://ancient-river-64795.herokuapp.com/api/pepe/${idToUpdate}`,{
      method: "PUT",
      body: JSON.stringify(this.state.updatePepe),
      headers: {
        "Content-Type": "application/json"
      }
    })
    if(apiResponse.status === 200){
      const parsedResponse = await apiResponse.json()
      this.setState({
        pepes: this.state.pepes.map(p => p.id === idToUpdate? parsedResponse: p)
      })
    }
    console.log(apiResponse.status)
  }
  componentDidMount(){
    this.getPepes()
    console.log("doing our api call now that it's been rendered")
  }
  render() {
    console.log("rendering")
    return (
      <div>
        <h2>Pepe Container</h2>
        <NewPepeComponent
          createNewPepe={this.createNewPepe}
          handleNewPepeInputChange={this.handleNewPepeInputChange}
        ></NewPepeComponent>
        { this.state.pepes.map((pepe) => {
          return <SinglePepeContainer handleUpdatePepeInputChange={this.handleUpdatePepeInputChange} updatePepe={this.updatePepe} deletePepe={this.deletePepe} pepe={pepe} key={`pepe-${pepe.id}`}></SinglePepeContainer>
        })
        }
      </div>
    )
  }
}

export default ClassyPepeContainer;