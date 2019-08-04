import React from 'react';
import Field from '../field';

export default class TextArea extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {label, value='', labelClassName, errors, ...textAreaProps} = this.props;
        return (<Field {...this.props}>
            <textarea value={value} {...textAreaProps}></textarea>
            </Field>
        )
    }
}