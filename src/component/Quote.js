import React, { Component } from 'react';
import { Button } from 'reactstrap';


class Quote extends Component {
  constructor(){
  super();

  this.state={
    quote:[ "loresipsum"],
    author: ["Sophie Chhoeu"]
  }
}

randomQuote(){
  fetch('https://talaikis.com/api/quotes/random/')
  .then(res =>res.json())
  .then((json) => {
    this.setState({
        quote:[json.quote],
        author:[json.author]
      })
  })
  .catch(function(error) { console.log( error); });
}




  render() {
    return (
      <div>
      <div className="blockquote">
      <span>{this.state.quote}</span>
        <p className="quote-author">-{this.state.author}</p>
      </div>
      <Button color="primary" onClick={() => this.randomQuote()}>More quotes</Button>
      </div>
    );
  }
}

export default Quote;
