import React from 'react';
import './people-form.css';
import {Input, Select, TextArea, Button, Checkbox, RadioGroup, Validator } from '../../components';
import _ from 'lodash';

class PeopleForm extends React.Component {
    constructor(props) {
        super(props);
    }
    handleFormData = (event) => {
        const {formData} = this.props;
        this.props.updatePeopleForm({...formData, [event.target.name]: event.target.value})
        this.props.setIsValidate(false);
    }
    submitForm = (event) => {
        this.props.setIsValidate(true);
    }
    cancelForm = (event) => {
        this.props.updatePeopleForm({gender:"Male"});
        this.props.setIsValidate(false);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.isValidate && _.isEmpty(nextProps.errors)) {
            this.props.submitForm();
        }
    }
    render() {
        const {formData={}, errors} =this.props;
        return <div className="form-container">
            Please Provide details
            <div claaName="row">
            <div className="column-30">
                <Input name="fName" value={formData.fName} errors={errors.fName} label="First Name" onChange={this.handleFormData}></Input>
            </div>
            <div className="column-30">
                <Input name="lName" value={formData.lName}  errors={errors.lName} label="Last Name"  onChange={this.handleFormData}></Input>
            </div>
            <div className="column-30">
                <RadioGroup name="gender" label="Gender" checked={formData.gender}  onChange={this.handleFormData} options={["Male", "Female"]} ></RadioGroup>
            </div>
            </div>
            <div claaName="row">
            <div className="column-30">
                <TextArea name="commAddress" errors={errors.commAddress} value={formData.commAddress}  onChange={this.handleFormData} label="Communication Address"></TextArea>
               
            </div>
            <div className="column-30">
                    <Select name="stayed" errors={errors.stayed} value={formData.stayed}  onChange={this.handleFormData} label="Places Stayed" options={["India", "USA", "Sri Lanka", "Canada", "Brazil"]} multiple></Select>
                </div>
            <div className="column-30">
                <TextArea name="notes" errors={errors.notes} value={formData.notes} label="Notes"  onChange={this.handleFormData}></TextArea>
            </div>
            </div>
            <div claaName="row">
                
                <div className="column-30">
                    <Input  name="phoneNumber" value={formData.phoneNumber} errors={errors.phoneNumber}  onChange={this.handleFormData} label="Phone Number"></Input>
                </div>
                <div className="column-30">
                    <Input  name="email" value={formData.email} errors={errors.email} onChange={this.handleFormData} label="Email Address"></Input>
                </div>
            </div>
            <div className="action-container">
                <button onClick={this.cancelForm}> Cancel </button>   
                <button onClick={this.submitForm}> Save </button>    
            </div>
            
        </div>
    }
}
const validationRules = {
    'email': 'required|email',
    'fName': 'required|alpha',
    'lName': 'required|alpha',
    'phoneNumber': 'required|integer',
    'commAddress': 'required|string',
  }
export default Validator(PeopleForm, validationRules);