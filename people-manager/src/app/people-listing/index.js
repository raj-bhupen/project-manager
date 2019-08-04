import React from 'react';
import './index.css';     
const tableHeaders = [{field:'fName', label: 'First Name'},
{field:'lName',  label: 'Last Name'},
{field:'commAddress',  label: 'Communication Address'},
{field:'gender',  label: 'Gender'},
{field:'notes', label: 'Notes'},
{field:'stayed', label: 'stayed', value: (arr=[]) => arr.join(", ")},
{field:'phoneNumber', label: 'Phone Number'},
{field:'email', label: 'Email Address'},
]
const PeopleListing = ({peopleList=[]}) => {
    if(peopleList.length > 0) {
        return (<><div> Details of People List</div>
            {
                <div className="list-container">
                    <table>
                        <thead>
                            <tr>
                            {tableHeaders.map((header) => (<th> {header.label} </th>) )  }
                            </tr>
                        </thead>
                        <tbody>
                            {peopleList.map((row) => {
                                return  (<tr> 
                                   {tableHeaders.map((header) => 
                                   {
                                       const fieldVaue = row[header.field];
                                        return <td> {header.value ? header.value(fieldVaue) : fieldVaue} </td>;
                                    } )  }  
                                 </tr>)
                            } )  }
                        </tbody>
                    </table>
                </div>
            }
                </>
            )
       
    }
    
    return '';        
}


export default PeopleListing;