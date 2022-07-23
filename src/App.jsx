import React from "react";
import InteractiveGrid from "./components/InteractiveGrid.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h1>Unicode Sorter</h1>
        <InteractiveGrid />
      </div>
    );
  }
}

export default App;
