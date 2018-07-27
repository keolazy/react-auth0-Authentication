// https://www.youtube.com/watch?v=QsMK3d3LxYQ
// 32:00 mark   
import React, {Component} from 'react'

export default class Main extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">
            Hello {this.props.name}, <br /> 
            Do you want to see the secret area?<a href="/secret">Click Here</a>
        </p>
        {!this.props.auth.isAuthenticated() &&
        <div>
          <hr/>
          Please login first
          <hr/>
          <button onClick={this.props.auth.login}>Login</button> 
        </div>
        }
      </div>
    )
  }
}