import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: "",
      author: "",
      tags: []
    }
  }

  componentDidMount(){
    this.setState({
      content: "a quote we made up",
      author: "anon",
      tags: ["quote", "stuff", "blah"]
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
