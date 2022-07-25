import React from 'react';

class InteractiveGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridHeight: 18,
      gridWidth: 14
    };
  }

  makeGrid () {
    let cellCounter = 0;
    let rows = [];
    for (let row = 0; row < this.state.gridHeight; row++) {
      let rowContent = [];
      for (let i = 0; i < this.state.gridWidth; i++) {
        rowContent.push(<td id={`cell-${cellCounter}`} class="border border-solid border-black border-spacing-1 w-7 h-8"></td>);
        cellCounter++;
      }
      rows.push(<tr>{rowContent}</tr>);
    }
    return rows;
  }

  render() {
    return (
      <table class="table-fixed border-separate border-spacing-1">{this.makeGrid()}</table>
    );
  }
};

export default InteractiveGrid;
