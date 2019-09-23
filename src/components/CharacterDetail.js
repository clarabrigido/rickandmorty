import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const CharacterDetail = props => {

  return(
    <React.Fragment>
    
    <div>Soy el detalle</div>
    <Link to="/" className="link-back">Volver</Link>
    </React.Fragment>
  );
};

export default CharacterDetail;