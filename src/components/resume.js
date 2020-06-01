import React , {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Clients from './clients';
import Skills from './skills';
class Resume extends Component {
    render()
    {
        return(
            <div >
              <Grid>
                  <Cell col={4}>
                      <div style={{ textAlign:'center' }}>
                         <img src="https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/9-512.png" alt="avatar" style={{ height: '200px' }}></img>

                      </div>
                      <h2 style={{paddingTop : '2em' ,color : 'black'}}>
                          Pruthvi N
                      </h2>
                      <h4 style={{ color : 'grey'}}
                      >
                           Developer
                      </h4>
                      <hr style = {{ borderTop : ' 3px solid #b33fb2' , width : '50%'}}/>
                      <p style={{ color : 'black'}}>
                      Certified Fiori Developer with Industry experience close to 2 years & worked on multiple implementation projects with handiness in UI5/Fiori Developer- HTML5, CSS, JavaScript , Gateway Development(oData) & SAP ABAP. 
                      </p>
                      <hr style = {{ borderTop : ' 3px solid #b33fb2' , width : '50%'}}/>
                      <h5 style={{ color : 'black'}}>
                          Address
                      </h5>
                      <p style={{ color : 'black'}}>
                         No 191 9th Cross SR Layout KR Puram Bangalore-36 
                      </p>
                      <h5 style={{ color : 'black'}}>
                          Phone
                      </h5>
                      <p style={{ color : 'black'}}>
                          +91-8553311146
                      </p>
                      <h5 style={{ color : 'black'}}>
                          Email
                      </h5>
                      <p style={{ color : 'black'}}>
                          rjpruthvi@gmail.com
                      </p>
                      <hr style = {{ borderTop : ' 3px solid #b33fb2' , width : '50%'}}/>

                  </Cell>
                  <Cell col={8} className="resume-right-col">
                      <h2>
                          Education
                      </h2>
                      <Education startYear={2012} endYear={2014} schoolName="Narayana PU College / Pre-University" schoolDescription=" Studied PCMC & holds an aggregate of 78%">
                          
                      </Education>
                      <Education startYear={2014} endYear={2018} schoolName="BMSIT / Bachelor of Engineering" schoolDescription="Holds a Bachelor’s degree in Bachelor of Engineering (Electrical and Electronics), Vishweshwaraya Technological University, Belagavi (2018) with an aggregate of 61.3%.">
                          
                      </Education>
                      <hr style={{ borderTop: '3px solid #e22947'} } />

                      <h2>
                          Experience
                      </h2>
                      <Experience startYear={2018} endYear={2020} jobName="PriceWaterhouseCoopers - AC / Fiori Developer" jobDescription="">
                             
                           
                      </Experience>
                      <hr style = {{ borderTop : ' 3px solid #b33fb2' , width : '50%'}}/>
                      <h2> Skills </h2>
                      <Skills
                      skill="SAP UI5 "
                      progress="90"
                      />
                       <Skills
                      skill="oData"
                      progress="80"
                      />
                       <Skills
                      skill="UiPath"
                      progress="70"
                      />
                       <Skills
                      skill="ABAP"
                      progress="60"
                      />

                      
                     
                      
                      
                              </Cell>

                      
                 
              </Grid>
            </div>
           
        )
    }
}

export default Resume;