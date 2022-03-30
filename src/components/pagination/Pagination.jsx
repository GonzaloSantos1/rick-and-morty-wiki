import React from 'react';

const Pagination = ({prev, next, onPrevious, onNext}) => {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div>
      {prev ? <button onClick={handlePrevious}>Previous</button> : null}
      {next ? <button onClick={handleNext}>Next</button> : null}
    </div>
  );
};

export default Pagination;
