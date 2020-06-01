import React ,{Component} from 'react';
import {Grid ,Cell} from 'react-mdl';
import Clients from './clients';
class Experience extends Component{
    render() {
        return(
           <Grid>
               <Cell col={4}>
                   <p>
                       {this.props.startYear} - {this.props.endYear}
                   </p>
               </Cell>
               <Cell col={8}>
                   <h4 style = {{ marginTop: '0px'}}>
                       {this.props.jobName}
                   </h4>
                   <p>
                       {this.props.jobDescription}
                   </p>
                  
               </Cell>

               <div className="clientDetails">

                
               <Clients style = {{  fontSize : '13px    '}}clientName="Client" role="Role Description" >

               </Clients>
               <Clients clientName="Coca-Cola" role="Full Stack Developer (UI5 & oData)" roleDescription=" Developed a self-help guided custom application for users to request access to roles & auto selection of enabler roles(Custom Logic placed in the backend & frontend). 
                               UI based guided approach to get relevant roles hence replacing the use of complex , non-user friendly web Dynpro & the standard Fiori  application.
" >

                              </Clients>
                              {/* <Clients clientName="Qurate Retail Group" role="Full Stack Developer (UI5 & oData)" roleDescription="Mass Access Request Tool : Request roles for multiple users among various SAP systems & environments by uploading an excel file with all the details of system, environment, role-details.  

Password Reset Tool : Help Users reset their password among various systems the user has access to via email functionality placed on the backend.
">

                              </Clients> */}
                              <Clients clientName="Giorgio Foods Inc" role="Full Stack Developer (UI5 & oData)" roleDescription="Developed abap reports to synchronize & keep track of last run times of a recurring process by hitting a custom transaction of the companies processes and update custom tables to hold records of the same.
Worked on a very complex & crucial lift and shift custom object. 
    ">

                              </Clients>
                              <Clients clientName="Internal" role="UiPath Developer" roleDescription=" Worked on the creation of Excel Comparison Bot which compares two different excel files to determine the differences in them.  
">

                              </Clients>

                              </div>
           </Grid>
        )
    }


}
export default Experience ;
