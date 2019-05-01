import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ProjectsList extends Component {
    constructor () {
    super()
    this.state = {
        projects: []
    }
    }

    componentDidMount () {
    axios.get('/api/projects').then(response => {
        this.setState({
        projects: response.data
        })
    })
    }

    render () {
    const { projects } = this.state
    return (
        <div className='container py-4'>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                <div className='card'>
                    <div className='card-header'>Projectos</div>
                    <div className='card-body'>
                    <Link className='btn btn-outline-info btn-sm mb-3' to='/tarea/crear'>
                        <i class="fas fa-plus-circle"></i>
                        &nbsp;Nuevo Projecto
                    </Link>
                    <ul className='list-group list-group-flush'>
                        {projects.map(project => (
                        <Link
                            className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                            to={`tarea/${project.id}`}
                            key={project.id}
                        >
                            {project.name}
                            
                            <span className='badge badge-primary badge-pill'>
                            &nbsp;Tareas: {project.tasks_count}
                            </span>
                        </Link>
                        ))}
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
        )
    }
}

export default ProjectsList