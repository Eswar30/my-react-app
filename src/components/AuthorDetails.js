import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class AuthorDetails extends Component {
// Creat a defalut props or pass props
static defaultProps = {
    name: "Eswarayya",
    number: 627538,
    status: true, 
    booklist: ['Ponniyan Selvan', 'Novel','Fictions']
 } 

    render() {
        return (
            <div>
                <div className="card bg-light mb-3">
            <h5 className="card-header"> {this.props.name} </h5>
            <div className="card-body">
                <p className="card-title">{this.props.number}</p>
                <p className="card-text"> Author status : {this.props.status}</p>
                <p className="card-text"> Book List : {this.props.booklist}</p>
            </div>
    </div>
            </div>
        );
    }
}

// validating props types

AuthorDetails.propTypes = {
    name : PropTypes.string,
    number : PropTypes.number,
    status: PropTypes.bool,
    booklist:PropTypes.array,
}



