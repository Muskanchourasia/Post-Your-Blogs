import React from 'react';
export class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
  
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
  
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      );
    }
  }
  
    <form >
    
    <div class="d-flex align-items-center mb-3 pb-1">
  
      <span class="h1 fw-bold mb-0" >Login please </span>
    </div>
  
  
    <div class="form-outline mb-4">
      <label class="form-label" for="Email">Email address:</label>
     
      <input type="email" id="email"  placeholder="Input ur user ID or Email" class="form-control form-control-lg" /> 
    </div>
  
    <div class="form-outline mb-4">
      <label class="form-label" for="password">Password:</label>  
      
      <input type="password" id="password" placeholder="Input your password" class="form-control form-control-lg" />
    </div>
  
    <div class="pt-1 mb-4">
      <button class="btn btn-primary btn-lg btn-block" type="button"  onclick="loginData()">Log In</button>
    </div>
  
    <div class="form-check mb-3">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" name="remember"> Remember me></input>
        </label>
      </div>
  
    <a class="small text-muted"  href="#!">Forgot password?</a>
  
  </form>

  function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }
  
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  
  function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }

