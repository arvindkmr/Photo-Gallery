import React from 'react';
import welcome from '../assests/welcome.svg';
const Title = () => {
  return (
    <div className="title">
      <h1>Welcome Dear</h1>
      <div className="header">
        <div>
          <img
            src={welcome}
            alt="welcome"
            style={{ height: 200, width: 500 }}
          />
        </div>
        <div>
          <h2>Photo Gallery</h2>
          <p> Great you came here !! Start uploading your picture down</p>
        </div>
      </div>
    </div>
  );
};

export default Title;
