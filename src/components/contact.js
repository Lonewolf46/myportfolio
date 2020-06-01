import React , {Component} from 'react';
import {Grid , Cell ,ListItem ,List,ListItemContent} from 'react-mdl';
class Contact
 extends Component {
    render()
    {
        return(
           <div className="contact-body">
               <Grid className="contact-grid">
                   <Cell col={6}>
                       <h2>
                           Pruthvi Nalluri
                       </h2>
                       <img src="https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/9-512.png" alt="avatar" style={{ height : '250px' , padding : '2em' }} />
                       <p>
                       Certified Fiori Developer with Industry experience close to 2 years & worked on multiple implementation projects with handiness in UI5/Fiori Developer- HTML5, CSS, JavaScript, Gateway Development(oData) & SAP ABAP. 
                       <br/>One of the brand Ambassadors for the digital community to promote & drive automation initiatives as well as skilled in RPA tools like UiPath.
                       </p>
                   </Cell>
                   <Cell col={6}>
                        <h2> Contact Me</h2>
                        <hr/>
                        <div className="contact-list"> 
                        <List>
                        <ListItem>
                            <ListItemContent style={{ fontSize:'30px' , fontFamily: 'Anton'}} > 
                               <i className="fa fa-phone-square" aria-hidden="true"></i>
                                +91 855 331 1146
                            </ListItemContent>
                         </ListItem>

                         <ListItem>
                            <ListItemContent style={{ fontSize:'30px' , fontFamily: 'Anton'}} > 
                               <i className="fa fa-envelope" aria-hidden="true"></i>
                                rjpruthvi@gmail.com
                            </ListItemContent>
                         </ListItem>

                         <ListItem>
                            <ListItemContent style={{ fontSize:'30px' , fontFamily: 'Anton'}} > 
                               <i className="fa fa-skype" aria-hidden="true"></i>
                                +91-8553311146
                            </ListItemContent>
                         </ListItem>

                         <ListItem>
                            <ListItemContent style={{ fontSize:'30px' , fontFamily: 'Anton'}} > 
                               <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                               pruthvi-n-893917132
                            </ListItemContent>
                         </ListItem>
                         
                        </List>
                        </div>
                        
                </Cell>
               </Grid>
           </div> 
        )
    }
}

export default Contact
;