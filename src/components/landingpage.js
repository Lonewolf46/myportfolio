
import React , {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
class Landing extends Component {
    render()
    {
        return(
            <div style={{ width : '100%' , margin : 'auto'}}>
                <Grid className="landing-grid">
                   <Cell col = {12}>
<img src="https://i.ya-webdesign.com/images/avatar-png-icon-6.png" alt="avatar" className="avatar-img"/>
<div className="banner-text">
    <h1> Full Stack Developer </h1>
      <hr/>
      <p>
          HTML5 | CSS3 | JavaScript | React | SAPUI5 | oDATA | ABAP | RPA 
      </p>
<div className="social-links" >

    {/* LinkedIn */}
    <a rel="noopener noreferrer" href="https://www.linkedin.com/in/pruthvi-n-893917132" target="_blank"> 
    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
    </a>

    <a rel="noopener noreferrer" href="https://github.com/Lonewolf46" target="_blank"> 
    <i className="fa fa-github-square"  aria-hidden="true"/>
    </a>


</div>
</div>
                   </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;