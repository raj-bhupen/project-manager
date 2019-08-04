import React from 'react';
import Field from '../field'

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {label, labelClassName, errors, ...inputProps } = this.props;
        if(label) {
        return (
            <Field {...this.props}>
                <input type="checkbox" {...inputProps}></input>)
            </Field>
        )
        }
       
         return (<input type="checkbox" {...inputProps}></input>)
    }

}