import React, { Component } from 'react'
import Gantt from './components/Gantt/Gantt'
import ganttData from './planning.json'
import Toolbar from './components/Toolbar/index'
import GanttTable from './components/AllData'
import './App.css';

class App extends Component {
  state = {
    currentZoom: 'Days'
  };

  handleZoomChange = (zoom) => {
    this.setState({
      currentZoom: zoom
    });
  }

  render() {
    const { currentZoom } = this.state;
    return (
      <div>
        <div className="table">
          <GanttTable />
        </div>
        <div className="zoom-bar">
          <Toolbar
            zoom={currentZoom}
            onZoomChange={this.handleZoomChange}
          />
        </div>
        <div className="gantt-container">
          <Gantt
            tasks={ganttData}
            zoom={currentZoom}
            onDataUpdated={this.logDataUpdate}
          />
        </div>
      </div>
    );
  }
}

export default App;