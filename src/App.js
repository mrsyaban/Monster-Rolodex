import { Component } from "react";

import CardList  from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";
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

        <SearchBox onSearchChange={this.onSearchChange} />
        
        <CardList listOfMonsters={filtered}/>

      </div>
    );
  }
}

export default App;
