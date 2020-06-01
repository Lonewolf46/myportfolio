import React , {Component} from 'react';
import {Tabs,Tab,Grid,Cell , Card , CardText,CardTitle , CardActions , Button ,CardMenu , IconButton} from 'react-mdl';
class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        if(this.state.activeTab===0) {
            return(
                <Card shadow={5} style={{minWidth : '450' , margin : 'auto'}}>
                    <CardTitle style={{ color: 'black' , height : '176px', background : "url(https://i2.wp.com/blog.logrocket.com/wp-content/uploads/2019/12/reactleaflet2.png?w=730&ssl=1) center /cover"}}>
                       React Project #1
                    </CardTitle>
                    <CardText>
                        This is my first react website I created while I was learning reactJs
                    </CardText>
                    <CardActions border>
                        <Button colored>
                            Github
                        </Button>

                    </CardActions>
                    
                </Card>
            )
      }
      else if(this.state.activeTab === 1) 
      {
        return(

            <div className="cards-sap"> 
            <Card shadow={5} style={{minWidth : '450' , margin : 'auto'}}>
            <CardTitle style={{ color: 'black' , height : '176px', background : "url(https://miro.medium.com/max/2000/1*eZS6oi9sLl-_qqimQBHj5Q.png) center /cover"}}>
               Custom GRC Request App
            </CardTitle>
            <CardText >
            Developed a self-help guided custom application for users to request access to roles & auto selection of enabler roles(Custom Logic placed in the backend & frontend). Roles could be based on reference user or transaction codes. 
            </CardText>
            </Card>

            <Card shadow={5} style={{minWidth : '450' , margin : 'auto'}}>
            <CardTitle style={{ color: 'black' , height : '176px', background : "url(https://miro.medium.com/max/2000/1*eZS6oi9sLl-_qqimQBHj5Q.png) center /cover"}}>
                 Mass Access Request Tool 
            </CardTitle>
            <CardText >
            Request roles for multiple users among various SAP systems & environments by uploading an excel file with all the details of system, environment, role-details. Especially helpful during go lives or commissioning of new systems. 

            </CardText>
        </Card>

        <Card shadow={5} style={{minWidth : '450' , margin : 'auto'}}>
            <CardTitle style={{ color: 'black' , height : '176px', background : "url(https://miro.medium.com/max/2000/1*eZS6oi9sLl-_qqimQBHj5Q.png) center /cover"}}>
            Password Reset Tool
            </CardTitle>
            <CardText >
                  Help Users reset their password among various system type & connector to only which they have access to , the user is sent a default password to his email which they can change later via email functionality placed on the backend.

            </CardText>
        </Card>

        </div>
        )
  
      }
      else if(this.state.activeTab===2) 
      {
        return(  <div className="cards-rpa">
             < Card shadow={5} style={{minWidth : '450' , margin : 'auto'}}>
            <CardTitle style={{ color: 'white' , height : '176px', background : "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUSqv7WAhQrh_fTYRdpW3g21hdt23vsq5Ro__7RoJcjHgBhz-G&usqp=CAU)"}}>
            BPC Excel Comparison Bot 
            </CardTitle>
            <CardText >
            Worked on the creation of Excel Comparison Bot which compares two different excel files to determine the differences in them.The bot compares the files within minutes, thereby reducing time and improving efficiency also saving manual effort. The bot can be used to compare any two files with a common primary key.   

            </CardText>
        </Card>

  


          </div>)
      }
      else if(this.state.activeTab===3) 
      {
          return(
            < Card shadow={5} style={{minWidth : '450' , margin : 'auto'}}>
            <CardTitle style={{ color: 'black' , height : '176px',  background : "url(https://images.click.in/classifieds/images/177/19_07_2017_17_23_26_kob65phg1t0cl9itgmit79t384_yqbwiehzc8.jpg)"}}>
            Custom ABAP Reports 
            </CardTitle>
            <CardText >
            Developed abap reports to synchronize & keep track of last run times of a recurring process by hitting a custom transaction of the companies processes and update custom tables to hold records of the same.Worked on a very complex & crucial lift and shift custom object. Transport the same from ecc to S/4.  
            </CardText>
        </Card>
          )
          
      }
    }
     
    


    render()
    {
        return(
            <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
               <Tab> React </Tab>
               <Tab> SAPUI5 </Tab>
               <Tab> RPA </Tab>
               <Tab> ABAP </Tab>
           </Tabs>

           <section className="projects-grid">
               <Grid>
                   <Cell col={12}>
                       <div className="content">
                           {this.toggleCategories()}
                       </div>
                   </Cell>
               </Grid>
               {/* {this.toggleCategories()} */}

           </section>
            </div>
        )
    }
}

export default Projects;