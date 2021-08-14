import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SelectionDropDown extends Component {

    state = {
        value : this.props.shelf
    }

    onShelfChange = (event) => {
        this.props.onUpdate(event.target.value);
        this.setState({
            value : event.target.value
        });
    };

    render(){

        return (
            <div className="book-shelf-changer">
                <select onChange={(event) => this.onShelfChange(event)} value={this.state.value}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading" >Currently Reading</option>
                    <option value="wantToRead" >Want to Read</option>
                    <option value="read" >Read</option>
                    <option value="none" >None</option>
                </select>
            </div>
        )
    }
}

SelectionDropDown.propTypes = {
    shelf : PropTypes.string.isRequired,
    onUpdate : PropTypes.func.isRequired
};

export default SelectionDropDown;