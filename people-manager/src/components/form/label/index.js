import React from 'react';
import './label.css'
export default class Label extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
       const {htmlFor, children} = this.props; 
        return (<div className="label-container">
            <label htmlFor={htmlFor}>
                {children}
            </label>
        </div>)
    }
}