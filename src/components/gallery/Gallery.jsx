import React from 'react';
import './_gallery.scss';

export const Gallery = ({characters}) => {
  return (
    <div className='gallery'>
      <div className='card-container'>
        {characters.map((item, index) => (
          <div key={index} className='card'>
            <img src={item.image} alt='' />
            <h3 className='name'>{item.name}</h3>
            <div className='info-box'>
              <p>
                <b>Species:</b> {item.species}
              </p>
              <p>
                <b>Gender:</b> {item.gender}
              </p>
              <p>
                <b>Status: </b>
                {item.status}
              </p>
              <p>
                <b>Location:</b> {item.location.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
