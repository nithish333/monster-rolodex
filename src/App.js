import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import SearchBox from "./Components/SeachBox/SearchBox";

class App extends Component {
  state = {
    monsters: [],
    searchField: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState({
          monsters: users,
        })
      );
  }
  nameChangeHandler = (e) => {
    this.setState({
      searchField: e.target.value,
    });
  };
  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          search={(e) => {
            this.nameChangeHandler(e);
          }}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
