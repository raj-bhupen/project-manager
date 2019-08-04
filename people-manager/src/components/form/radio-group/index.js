import React from 'react';
import Field from '../field'

export default class RadioGroup extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {label, labelClassName, options = [], errors, checked, name, ...radioProps } = this.props;
        return (<Field {...this.props}>
            { options.map(option => {
            return  <span> {option}<input name={name} type="radio" value={option} checked={option === checked} {...radioProps}></input> </span>
            })
           
            }
             </Field>)
    }
}