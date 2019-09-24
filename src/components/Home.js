import React from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';
import PropTypes from 'prop-types';

const Home = props => {
  const {
    getUserQuery,
    query,
    characters
  } = props;

  return (
    <React.Fragment>
    <Filters 
      getUserQuery={getUserQuery} 
      query={query}
    />

    <CharacterList 
      characters={characters}
      query={query} 
    />
    </React.Fragment>
  );
};

Home.propTypes = {
  getUserQuery: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
  
}
          
export default Home;