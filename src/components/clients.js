import React ,{Component} from 'react';
import {Grid ,Cell} from 'react-mdl';
class Clients extends Component{
    render() {
        return(
           <Grid>
               <Cell col={4}>
               <h4 style = {{ marginTop: '0px' , fontSize: '13px'}}>
                       {this.props.clientName}
                   </h4>
               </Cell>
               <Cell col={8}> 
               <h5 style = {{ marginTop: '0px'}}>
                       {this.props.role}
                   </h5>
                   <p style = {{ fontSize : '12px'}}> 
                       {this.props.roleDescription}
                   </p>
               </Cell>
           </Grid>
        )
    }


}

export default Clients;