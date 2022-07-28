import React from 'react';

const TitleBar = (props) => {
  return (
    <div class='w-3/5 flex flex-row'>
      <h1>Unicode Sorter</h1>
      <input type="button" value="Refresh" className="p-2" />
    </div>
  );
};

export default TitleBar;
