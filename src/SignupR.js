import React from 'react';
import { withRouter} from "react-router-dom";


class SignupUi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name:'', email:'',password:'', mobile:''};
  }

  handleChange1 = (event) => {
    this.setState({ name: event.target.value });
  };

  handleChange2 = (event) => {
    this.setState({ email: event.target.value });
  };

  handleChange3 = (event) => {
    this.setState({ password: event.target.value });
  };

  handleChange4 = (event) => {
    this.setState({ mobile: event.target.value });
  };

  handleClick = () => {
    localStorage.setItem("name",JSON.stringify(this.state.name));
    localStorage.setItem("email",JSON.stringify(this.state.email));
    localStorage.setItem("password",JSON.stringify(this.state.password));
    localStorage.setItem("number",JSON.stringify(this.state.mobile));
    if (
      this.state.name !== ""&&
      this.state.email !== ""&&
      this.state.password !== ""&&
      this.state.mobile !== ""
    ) 
    {this.props.history.push("/loginUi");}
    
      
  };

  render(){
  return (
    <div className="main">
     <div className="sub-main">
       
         <div>
           <h1>SignUp Page</h1>
            
            <div>
            <label class="form-label" for="Username">Username</label>
            <br/>
            <input type="text" placeholder="Enter your name" className="name" onChange={this.handleChange1}/>
            </div>
            <br/>


            <div>
            <label class="form-label" for="Email">Email address:</label>
            <br/>
            <input type="text" placeholder="Enter your ID or email" className="name" onChange={this.handleChange2}/>
            </div>
            <br/>

            <div className="second-input">
            <label class="form-label" for="password">Password:</label>  
            <br/>
            <input type="password" placeholder="Enter your password" className="name" onChange={this.handleChange3}/>
            </div>
            <br/>

            <div>
            <label class="form-label" for="Number">Mobile no.:</label>
            <br/>
            <input type="number" placeholder="Enter your mobile no." className="name" onChange={this.handleChange4}/>
            </div>
            <br/>


            <div className="Submit-button">
            
          <button onClick={this.handleClick}> Submit </button>
          </div>
             
 
         </div>
       </div>

     </div>
   
  );
}
}
export default withRouter(SignupUi)