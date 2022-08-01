import React from 'react';
import { withRouter} from "react-router-dom";
export class LoginUi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email:'',password:''};
  }

  
  handleChange1 = (event) => {
    this.setState({ email: event.target.value });
  };

  handleChange2 = (event) => {
    this.setState({ password: event.target.value });
  };

  handleClick = () => {
    {this.props.history.push("/Nav");}
  
  };

  render(){
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">

           </div>


         </div>
         <div>
           <h1>Login Page</h1>
           <div>
            
            <label class="form-label" for="Email">Email address:</label>
            <br/>

            <input type="text" placeholder="Enter your used ID or email" className="name" onChange={this.handleChange1} />
         </div>
            <br/>
         <div className="second-input">
            <label class="form-label" for="password">Password:</label>  
            <br/>
            <input type="password" placeholder="Enter your password" className="name" onChange={this.handleChange2} />
            </div>
            <br/>
            <div className="login-button">
            
          <button onClick={this.handleClick}>Login</button>
          </div>     
 
         </div>
       </div>
       

     </div>
    </div>
  );
}
}
