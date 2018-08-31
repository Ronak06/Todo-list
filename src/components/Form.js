import React, {Component } from 'react';

class Form extends Component {

    state = {
        inputValue: ""
    }

    handleChange = (evt) => {
        this.setState({ inputValue: evt.target.value })
    }

    render() { 
        return(
        <div className="Form">
        <form>
            <input 
            onChange={(evt) => this.handleChange(evt)}
            value={this.state.inputValue}
            />
        </form> 
        </div>
        )
    }
}

export default Form;