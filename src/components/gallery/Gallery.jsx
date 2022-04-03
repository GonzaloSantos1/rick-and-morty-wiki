import React from 'react';
import './_gallery.scss';

export const Gallery = ({characters}) => {
  return (
    <div className='gallery'>
      <div className='card-container'>
        {characters.map((item, index) => (
          <div key={index} className='card'>
            <h3>{item.name}</h3>
            <img src={item.image} alt='' />
            <div className='info-box'>
              <p>Species: {item.species}</p>
              <p>Gender: {item.gender}</p>
              <p>Status: {item.status}</p>
              <p>Location: {item.location.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
