import React, {Component } from 'react';

import Task from './Task'

class List extends Component {

    state = {
        todos: [
            { value: 'Clean the kitchen', done: false },
            { value: 'Wash the car', done: true }
        ]
    }

    render() {
        return(
            <div className="List">
            {this.state.todos.map((todo, index) => {
                return (
                    <Task key={index}/>
                )
            })}
            </div>
        )
    }
}

export default List;