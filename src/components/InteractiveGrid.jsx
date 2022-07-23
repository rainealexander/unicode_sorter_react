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
        rowContent.push(<td id={`cell-${cellCounter}`} class="border border-solid border-black w-5 h-6"></td>);
        cellCounter++;
      }
      rows.push(<tr>{rowContent}</tr>);
    }
    return rows;
  }

  render() {
    return (
      <table class="w-2/6 grid">{this.makeGrid()}</table>
    );
  }
};

export default InteractiveGrid;
