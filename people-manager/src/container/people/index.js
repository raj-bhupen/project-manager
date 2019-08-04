import React, {useState} from 'react';
import * as People from '../../app';
import './index.css';

function App() {
  const [peopleForm, updatePeopleForm] = useState({gender: 'Male'});
  const [isValidate, setIsValidate] = useState(false);
  const [peopleList, updatePeopleList] = useState([]);
  const submitForm = () => {
    updatePeopleList([...peopleList, peopleForm]);
    updatePeopleForm({});
    setIsValidate(false);
  }
  return (
    <div className="App">
    <div className="header-container">
    <div className="header-container">
      People Manangement 
      </div>
    </div>
    <div className="people-container">
     <People.PeopleForm updatePeopleForm={updatePeopleForm} formData={peopleForm} isValidate={isValidate} submitForm={submitForm} setIsValidate={setIsValidate}></People.PeopleForm>     
     <People.PeopleListing peopleList={peopleList}></People.PeopleListing>
     </div>
    </div>

  );
}

export default App;
