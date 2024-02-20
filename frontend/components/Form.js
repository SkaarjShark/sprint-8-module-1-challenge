import React from 'react'

export default class Form extends React.Component {
  state = {
    name: ''
  }

  onSubmit = evt => {
    evt.preventDefault()
    const {addTodo} = this.props
    this.props.addTodo(this.state.name)
    this.setState({
      ...this.state, // if there were more in state
      name: ''
    })
  }

  onChange = evt => {
    const { value } = evt.target
    this.setState({
      ...this.state,
      name: value
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" placeholder="Type todo" value={this.state.name} onChange={this.onChange} />
        <input type="submit" />
      </form>
    )
  }
}
