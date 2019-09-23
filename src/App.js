import React from 'react';
import logo from './logo.png';
import './App.css';
import fetchCharacters from './services/fetchCharacters';
import CharacterList from './components/CharacterList';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: []
    }
  }

  componentDidMount(){
    this.getCharacters();
  }

  getCharacters(){
    fetchCharacters()
    .then(data => {
      this.setState({
        characters: data.results
      });
    });
  }

  render() {
    const {
      characters
    } = this.state;

    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
        </header>
        <main className="app-main">
          <CharacterList characters={characters} />
        </main>
      </div>
    );
  }
}

export default App;
