import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = props =>{
  const {
    image,
    name,
    species
  } = props;

  return (
    <div className="character-card">
      <img className="character-image" src={image} alt={`Personaje ${name} de Rick & Morty`} />
      <h2 className="character-name">{name}</h2>
      <p className="character-species">{species}</p>
    </div>
  );
};

CharacterCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
}
export default CharacterCard;