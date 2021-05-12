import React, { Component } from 'react';

class Contact extends Component {

    render() {
        return(
            <div className="contact">
                <h3 className="contact_name">{this.props.contact.firstName} {this.props.contact.lastName}</h3>
                <p className="contact_phone">phone: {this.props.contact.phone}</p>

                <img 
                className="contact_gender"
                src={ this.props.contact.photoGender }
                alt="#" />
                
            </div>
        )
    }
}

export default Contact;