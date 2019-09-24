import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import {Link} from 'react-router-dom';

const CharacterList = props => {
  const {
    characters,
    query
  } = props;

  return (
    <ol className="characters-list">
      {characters
        .filter(characterName => characterName.name.toUpperCase().includes(query.toUpperCase()))
        .map(character => {
          return (
            <li className="character" key={character.id}>
              <Link className="character-link" to={`/character-detail/${character.id}`}>
              <CharacterCard 
                image={character.image}
                name={character.name}
                species={character.species} 
              
              />
              </Link>
            </li>
          ); 
        })}
    </ol>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired
};

export default CharacterList;