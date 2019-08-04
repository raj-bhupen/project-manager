import React from 'react';
import Label from '../label';
import './index.css';

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {label, labelClassName, errors, ...inputProps } = this.props;
        if(label) {
            return (<div class="field-container">
            <div className="field">
                {label && <Label className={labelClassName}>{label}</Label>}
              <div className="comp-container"> 
                   {this.props.children} 
                   { errors && <div className="error">{errors[0]}</div>}
              </div>
            </div>
            
            </div>)
        }
       
         return (<input type="checkbox" {...inputProps}></input>)
    }

}