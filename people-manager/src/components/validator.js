import Validate from 'validatorjs';
import React from 'react';

Validate.registerImplicit('arrayLength', function(value) {
  return (value || []).length ;
}, '* Required');

export default function Validator(WrappedComponent, validationRules, customMessages = {}) {
  let messages =  {'required': '*Required'}

  return class extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        errors: {}
      };
    }
    componentDidMount() {
      this.validateForm(this.props);
    }

    validateForm = (props) => {
      if(props.isValidate) {
        let validate = new Validate(props.formData, validationRules, {...messages, ...customMessages});
        if(validate.passes()) {
          this.setState({errors: {}});
        } else {
          console.log(validate.errors.all());
          this.setState({errors: validate.errors.all()});
        }
      } else {
        this.setState({errors: {}})
      }
    }
    componentWillReceiveProps(nextProps, nextContext) {
      this.validateForm(nextProps)
    }


    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent errors={this.state.errors} {...this.props} />;
    }
  };
};