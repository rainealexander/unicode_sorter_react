import React from "react";
import TitleBar from "./components/TitleBar.jsx";
import InteractiveGrid from "./components/InteractiveGrid.jsx";
import ButtonGroup from "./components/ButtonGroup.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <TitleBar />
        <div class="flex flex-row">
          <InteractiveGrid />
          <ButtonGroup />
        </div>
      </div>
    );
  }
}

export default App;
