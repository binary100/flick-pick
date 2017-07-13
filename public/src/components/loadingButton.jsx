import React from 'react';
import { Button } from 'react-bootstrap';

const LoadingButton = ({ handleClick, buttonClass}) => {
  return (
    <Button
      className="small-tile-button"
      onClick={() => handleClick()}
    >
      <span className={buttonClass} />
    </Button>

  );
};

export default LoadingButton;

/*
<Button
      className="col-sm-10 small-tile-button"
      onClick={() => handleClick()}
    >
      { buttonText }
    </Button>

*/