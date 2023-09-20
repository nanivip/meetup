import {Route, Redirect, Switch} from 'react-router-dom'
import {Component} from 'react'
import Register from './components/Register'
import Home from './components/Home'

import NotFound from './components/NotFound'

import RegisterContext from './context/RegisterContext'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {
    condition: true,
    name: '',
    topic: 'Arts and Culture',
    errorMsg: '',
  }

  updateName = name => {
    this.setState({name})
  }

  updateTopic = topic => {
    this.setState({topic})
  }

  updateCondition = () => {
    this.setState({condition: false})
  }

  updateError = errorMsg => {
    this.setState({errorMsg})
  }

  render() {
    const {name, topic, condition, errorMsg} = this.state
    return (
      <RegisterContext.Provider
        value={{
          name,
          topic,
          errorMsg,
          condition,
          updateName: this.updateName,
          updateTopic: this.updateTopic,
          updateError: this.updateError,
          updateCondition: this.updateCondition,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
          <NotFound />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
