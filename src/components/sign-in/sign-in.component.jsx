import React, { Component } from 'react'

import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.setState({
      email: '',
      password: '',
    })
  }

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            name="email"
            type="email"
            value={this.state.email}
            required
            label="Email"
          />

          <FormInput
            name="password"
            type="passowrd"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
        </form>
        <CustomButton type="submit" value="Submit form">
          Sign in
        </CustomButton>
      </div>
    )
  }
}

export default SignIn
