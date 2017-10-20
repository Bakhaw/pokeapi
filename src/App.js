import React, {Component} from 'react';
import logoPokeball from './logo_pokeball.png';
import logoPokemon from './logo_pokemon.png';
import './App.css';

class App extends Component {
  state = {
    num: "",
    date: ""
  }
  loadPokemon = (e) => {
    e.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.num}`).then(res => res.json()).then(body => {
      this.setState({data: body});
    }).catch(err => {
      throw err
    })
  }

  handleInputChange = (e) => {
    this.setState({num: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <img src={logoPokeball} className="App-logo" alt="logo pokeball"/>
        <img src={logoPokemon} className="logoPokemon" alt="logo pokemon"/>
        <form className="inputSearch">
          <input type="text" onChange={this.handleInputChange} value={this.state.num}/>
          <button onClick={this.loadPokemon}>
            Rechercher
          </button>
        </form>
        {this.state.data &&
        <div className="card">
          <h3>{this.state.data && this.state.data.name.toUpperCase()}</h3>
          <img src={this.state.data && this.state.data.sprites.front_default} alt={this.state.data.name}/>
          <img src={this.state.data && this.state.data.sprites.back_default} alt={this.state.data.name}/>
          <h3>Type: {this.state.data && this.state.data.types[0].type.name}</h3>
          <h3>Height: {this.state.data && this.state.data.height}</h3>
          <h3>Weight: {this.state.data && this.state.data.weight}</h3>
        </div>
      }
      </div>
    );
  }
}

export default App;
