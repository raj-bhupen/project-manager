import React from 'react';
import Field from '../field';

export default class Input extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {label, value='', labelClassName, errors, ...inputProps } = this.props;
        return  (<Field {...this.props}>
            <input value={value} {...inputProps}></input>
            </Field >
        )
    }
}