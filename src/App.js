import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
      user: [],
      input: ""
    }


componentDidMount() {
  axios.get('https://api.github.com/users/r-gio28')
    .then(resp => {
      this.setState({
        ...this.state,
        user: resp.data
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.input}`)
      .then(resp => {
        this.setState({
          ...this.state,
          user: resp.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    return(<div>
      <h1>Github Info</h1>
      <form>
        <input value={this.state.input} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Search</button>
      </form>
    </div>);
  }
}

export default App;
