import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: "",
      author: "",
      tags: []
    }
  }

  updateQuote(response) {
    this.setState({
      content: response.content,
      author: response.author,
      tags: response.tags
    })
  }

  status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(new Error(response.statusText))
    }
  }

  componentDidMount() {
    this.setState({
      content: "....loading",
      author: "",
      tags: []
    })

    fetch("https://api.quotable.io/random")
      .then(this.status)
      .then((response) => response.json())
      .then((response) => this.updateQuote(response))
      .catch((error) => {
        console.error(error);
        alert(error);
      })
  }

  render() {
    return (
      <>
        <h1>Quote of the day</h1>
        <p><b>Content:</b> {this.state.content} </p>
        <p><b>Author:</b> {this.state.author} </p>
        <p><b>Tags:</b> {this.state.tags.join(", ")}</p>
      </>
    )
  }
}

export default App;
