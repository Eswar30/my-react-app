import React, { Component } from 'react';

export class Login extends Component {

    constructor() {
        super();
        // this.handleChange = this.handleChange.bind(this);  if using a arrow function(=>) then do not use this event bind handler
        this.state = {
            eamil: "", 
            password: "", 
            rememberme: false, 
        };
    }

         // Events Field change Handlers
         handleChange=(event)=> {
            // console.log(event.target.value);
            const fieldName = event.target.name;
            let fieldValue=event.target.value;
            if(fieldName=="rememberme") {
                fieldValue=event.target.checked;
            }
            // console.log(fieldName,fieldValue);
            this.setState({ [fieldName]: fieldValue } );
            
    
        }
    

        // Handle form submit 
    handleFormSubmit= (event) => {
        //prevent default event submit
        event.preventDefault();

        console.log(this.state);

        //clearing fields
        this.setState({
            eamil: "", 
            password: "", 
            rememberme: false, 
        });


    }


    render() {
    return (
        <div className='card bg-light mb-3'>
            <div className="card-body">
                <div className='row'>
                    <div className='col-sm-2'></div>
                    <div className='col-sm-8'>
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="form-group">
                                <label htmlfor="email">Email address</label>
                                <input type="email" className="form-control" id="email"  name = "email"  value ={this.state.email} 
                                onChange={this.handleChange} />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlfor="password">Password</label>
                                <input type="password" className="form-control" id="password" name = "password"  value ={this.state.password} 
                                onChange={this.handleChange} />
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="rememberme"  name = "rememberme"  value ={this.state.rememberme} 
                                onChange={this.handleChange} />
                                <label className="form-check-label" htmlfor="rememberme">Remember me</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className='col-sm-2'></div>
                </div>

            </div>
        </div>
    )
    }
}
