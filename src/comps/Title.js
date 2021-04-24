import React from 'react';
import welcome from '../assests/welcome.svg';
const Title = () => {
  return (
    <div>
      <div className="topBar">
        <h1>Welcome Dear</h1>
      </div>
      <div className="title">
        <div className="header">
          <div
          >
            <img
              src={welcome}
              alt="welcome"
              className="img"
            />
          </div>
          <div>
            <h2>Photo Gallery</h2>
            <p> Great you came here !! Start uploading your picture down</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
