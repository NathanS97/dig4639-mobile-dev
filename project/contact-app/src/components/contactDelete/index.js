import React from 'react';

const HEADERS = {
  "Method": "GET",
  "headers": {
    "API": "snodgrass",
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
}

class ContactDelete extends React.Component {

  constructor(props) {
    super(props);

    this.textInput = React.createRef();

    this.state = this.state = {
      value: '',
    }
  }

  delVal = () => {
    let newHeaders = {
      ...HEADERS,
      "method": "POST",
      body: JSON.stringify({
        position: this.textInput.current.value,
      })
    }

    fetch("http://plato.mrl.ai:8080/contacts/remove", newHeaders)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ value: this.textInput.current.value })
        console.log(data)
      }
        , [])
  }

  handleSubmit = e => {
    e.preventDefault();
    this.delVal()
  }

  render() {
    return (
      <div> <h2>Delete contact</h2>

        <form onSubmit={this.handleSubmit}>

          <label htmlFor="name">Position</label><br />
          <input type="text" ref={this.textInput} id="position" /><br />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ContactDelete;