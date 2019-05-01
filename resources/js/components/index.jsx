import React, { Component } from 'react'
import  { BrowserRouter as Router,
          Route, 
          Switch 
        } from 'react-router-dom'
import Header from './Header'
import NewProject from './NewProject'
import ProjectsList from './ProjectsList'
import SingleProject from './SingleProject'
import {hot} from 'react-hot-loader'

class App extends Component {
        render () {
        return (
            <Router >
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={ProjectsList} />
                    <Route exact path='/tareas' component={ProjectsList} />
                    <Route path='/tarea/crear' component={NewProject} />
                    <Route path='/tarea/:id' component={SingleProject} />
                    <Route component={ProjectsList} />

                </Switch>
            </div>
            </Router>
        )
    }
}

export default hot(module)(App);