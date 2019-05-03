import React from 'react';
import Form from './FromBuilder'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      form: [
        {
          key: "loginPassword", // required
          type: "password", // required
          placeholder: "password",
          autoComplete: "true",
          max: 5,
          min: 2,
          required: true,
          disabled: false
        },
        {
          key: "loginEmail", // required
          type: "email", // required
          placeholder: "email",
          autoComplete: "true",
          max: 5,
          min: 1,
          required: true,
          pattern: /(.*)/g,
          disabled: true,
          label: "hello"
        },
        {
          key: "cars", // required
          type: "dropdown", // required
          required: true,
          options: [
            {
              label: "Saab",
              value: "saab"
            },
            {
              label: "Audi",
              value: "audi"
            }
          ]
        },
        {
          key: "submit",
          type: "submit",
          placeholder: "submit",
        }
      ],
    }
  }

  onChange = values => {
    console.log(values)
  }

  render() {
    return (
      <React.Fragment>
        <Form schema={this.state.form} onChange={this.onChange} />
      </React.Fragment>
    );
  }
}

export default App;
