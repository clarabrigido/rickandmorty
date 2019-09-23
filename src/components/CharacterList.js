import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';

const CharacterList = props => {
  const {
    characters
  } = props;

  return (
    <ol className="characters-list">
      {characters.map(character => {
        return (
          <li className="character" key={character.id}>
            <CharacterCard 
              image={character.image}
              name={character.name}
              species={character.species}
            />
          </li>
        ); 
      })}
    </ol>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CharacterList;