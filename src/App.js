import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField : ''
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("DidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => { 
    this.setState(() => {
      return {searchField : event.target.value.toLocaleLowerCase()} 
    });
  }

  render() {
    console.log("render");

    const filtered = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    })
    
    return (
      <div className="App">
        <input 
          className="search-box" 
          type="search" 
          placeholder="search monsters" 
          onChange={this.onSearchChange}
        />

        {filtered.map((monster) => {
          return <div key={monster.id}> {monster.name} </div>;
        })}

      </div>
    );
  }
}

export default App;
