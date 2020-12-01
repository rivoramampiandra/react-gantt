import React from 'react'
import ganttData from '../gantt.json'
//import Planning from './Plannings'
//import App from '../App'
import '../App.css'

class GanttTable extends React.Component {
    render() {
        return (
            /*<div>
                {JSON.stringify(ganttData)}
            </div>*/
            <div className="projet">
                <div className="projects">
                    {ganttData.map((projects, i) => {
                        return (
                            <div key={i}>
                                <div style={{ textAlign: "left" }}>
                                    <p>{projects.user.role}</p>
                                    <b>{projects.user.first_name} {projects.user.last_name}</b>

                                    {/*<Planning liste={projects.planning.items}/>*/}
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <b>{projects.project.name}</b>
                                    <p>Mis à jour le {projects.dates.update}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default GanttTable