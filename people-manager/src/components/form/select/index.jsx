import React from 'react';
import Field from '../field';

export default class Select extends React.Component {
    constructor(props) {
        super(props);
    }
    onSelect = (event) =>{
        const selectedOptions = event.target.selectedOptions;
        const selected = [];
        for(let i=0; i<selectedOptions.length; i++) {
            selected.push(event.target.selectedOptions.item(i).value);
        }
        this.props.onChange({target: {value: selected, name: event.target.name}});
    }
    render() {
        const { label, labelClassName, options, errors, value=[], ...selectProps } = this.props;
    return (<Field {...this.props}>
        <select  {...selectProps} onChange={this.onSelect}>
        {   options.map(option => {
                return  <option value={option} selected={value.includes(option)} >{option}</option>
            })
        }
        </select>
        </Field>
    );
    }
}