import React from 'react'

class Planning extends React.Component {
    state = {
        name : []
    }

    /*componentDidMount() {
        this.setState({
            name: window.ganttData
        })

        console.log("did mount", this.props.liste)
    }

    componentWillMount() {
        
    }

    constructor(props) {
        super(props)
    }*/

    render() {
        const liste = this.props.liste.map((projects, i) => {
            return (
                <>
                    <tr key={i}>
                        <td>{projects.id}</td>
                        <td>{projects.title}</td>
                        <td>{projects.description}</td>
                        <td>{projects.start_date}</td>
                        <td>{projects.duration}</td>
                        <td>{projects.type}</td>
                        <td>{projects.id_parent}</td>
                        <td>{projects.progress}</td>
                    </tr>
                </>
            )
        })
        return (
            <>
                <table id="projects">
                    <tbody>
                        {liste}
                    </tbody>
                </table>
            </>
        )
    }
}

export default Planning