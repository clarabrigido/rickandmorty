import React from 'react';
import logo from './logo.png';
import './App.css';
import fetchCharacters from './services/fetchCharacters';
import CharacterList from './components/CharacterList';
import Filters from './components/Filters';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      query: ''
    }
    this.getUserQuery = this.getUserQuery.bind(this);
  }
  
  getUserQuery(event){
    const query =event.currentTarget.value;

    this.setState({
      query: query 
      
    });
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
      characters,
      query
    } = this.state;

    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
        </header>
        <main className="app-main">
          <Filters 
          getUserQuery={this.getUserQuery} 
          query={query}
          />
          
          <CharacterList 
          characters={characters}
          query={query} />
        </main>
      </div>
    );
  }
}

export default App;
