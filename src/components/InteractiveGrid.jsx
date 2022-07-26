import React, { useState, useEffect } from 'react';
import Cell from './Cell.jsx';

const InteractiveGrid = (props) => {

  const [gridHeight, setGridHeight] = useState(18);
  const [gridWidth, setGridWidth] = useState(14);

  const makeGrid = () => {
    let cellCounter = 0;
    let rows = [];
    for (let row = 0; row < gridHeight; row++) {
      let rowContent = [];
      for (let i = 0; i < gridWidth; i++) {
        let cellId = `cell-${cellCounter}`;
        rowContent.push(<Cell cellId={cellId} character={cellCounter} />);
        cellCounter++;
      }
      rows.push(<tr>{rowContent}</tr>);
    }
    return rows;
  }

  return (
    <table class="table-fixed border-separate border-spacing-1">{makeGrid()}</table>
  );

};

export default InteractiveGrid;
