import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const CharacterDetail = props => {
  const {
    routerProps,
    characters
  } = props;
  const characterId = parseInt(routerProps.match.params.characterId); 

  if (characterId>characters.length){
    return (
      <React.Fragment>
      <p className="text-advise">Vuelve al listado</p>
      <div className="box__link-back">
      <Link to="/" className="link-back">Volver</Link>
      </div>
      </React.Fragment>
    );
  }
  const character = characters.filter(item => item.id === characterId);
  
  if (character[0]) {
    const {
      image,
      name,
      species,
      origin,
      episode,
      status
    } = character[0];
    return(
      <React.Fragment>
        <div className="box-detail">
          <div className="box__detail-image">
            <img className="character__detail-image" src={image} alt={`Personaje ${name} de Rick & Morty`} />
          </div>
          <div className="box__detail-info">
            <h2>Nombre: {name}</h2>
            <p><strong>Especie: </strong>{species}</p>
            <p><strong>Origen:</strong> {origin.name}</p>
            <p><strong>Nº episiodios:</strong> {episode.length}</p> 
            <p><strong>Estado:</strong> {status} {(status === 'Alive') ? <i className="fab fa-creative-commons-sampling"></i> : `${status}`}</p>
          </div>
          <div className="box__link-back">
            <Link to="/" className="link-back">Volver</Link>
          </div>
        </div>
      </React.Fragment>
  );
  } else {
    return( 
      <React.Fragment>
        <p className="text-advise">Lo siento, información no encontrada</p>
        <div className="box__link-back">
        <Link to="/" className="link-back">Volver</Link>
        </div>
      </React.Fragment>
    );
}
};


CharacterDetail.propTypes = {
  routerProps: PropTypes.object.isRequired,
  characters:PropTypes.arrayOf(PropTypes.object).isRequired 
};

export default CharacterDetail;