import React from "react";
import "./App.css";
import TabNav from "./Components/TabNav";
import Tab from "./Components/Tab";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "Home",
    };
  }
  setSelected = (tab) => {
    this.setState({ selected: tab });
  };
  render() {
    return (
      <div className="App mt-4">
        <TabNav className="tabs"
          tabs={["Home", "Settings", "Profile"]}
          selected={this.state.selected}
          setSelected={this.setSelected}
        >
          <Tab className="tabs" isSelected={this.state.selected === "Home"}>
            <p>Tab 1 Content is showing here</p>
          </Tab>
          <Tab isSelected={this.state.selected === "Settings"}>
            <p>Tab 2 Content is showing here</p>
          </Tab>
          <Tab isSelected={this.state.selected === "Profile"}>
            <p>Tab 3 Content is showing here</p>
          </Tab>
        </TabNav>
      </div>
    );
  }
}
export default App;
