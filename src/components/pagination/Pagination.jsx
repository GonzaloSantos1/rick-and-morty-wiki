import React from 'react';
import './_pagination.scss';

const Pagination = ({prev, next, onPrevious, onNext}) => {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div className='pagination'>
      {prev ? (
        <button className='button' onClick={handlePrevious}>
          Previous
        </button>
      ) : null}
      {next ? (
        <button className='button' onClick={handleNext}>
          Next
        </button>
      ) : null}
    </div>
  );
};

export default Pagination;
