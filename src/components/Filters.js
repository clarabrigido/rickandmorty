import React from 'react';
import PropTypes from 'prop-types';

const Filters = props => {
  const{
    getUserQuery,
    query
  } = props;
  
  return (
    <div className="box-filters">
      <input className="user-query" type="text" onChange={getUserQuery} value={query}></input>
    </div>
  );
};

Filters.propTypes = {
  getUserQuery: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
}

export default Filters;