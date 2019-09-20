import React, { Component } from 'react';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    clearInputs = () => {
        this.setState({
            username: "",
            password: ""
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(this.state));
        this.clearInputs();
    }

    render() {

        return (
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <h3>Sign Up</h3>
                    <input onChange={this.handleChange}
                           value={this.state.username}
                           name="username"
                           type="text"
                           placeholder="Username"/>
                    <input onChange={this.handleChange}
                           value={this.state.password}
                           name="password"
                           type="password"
                           placeholder="Password"/>
                    <button type="submit">Create Account</button>
                </form>
            </div>
        )
    }
}

export default Signup;



