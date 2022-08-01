import React from 'react';

export class Nav extends React.Component{
    render(){
    return (
<div>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="javascript:void(0)" id="welcome"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Create Post</a>
              </li>
             
            </ul>
           
          </div>
          <div>
            
            
          </div>

        </div>
      </nav>
      <div style={{textAlign:'center',}}>
        <h1>Add Post</h1>
      </div>
      <div
      className="container">

      </div>
      <div style={{margin:"100px",marginLeft:"600px"}}>
        <input type="text area" placeholder="Post Your Blog Here....."  style={{height:"400px", width:"650px"}} /> 
      </div>
      <div>
       <button style={{marginLeft:"750px"}}>Post</button>
      </div>
</div>
           
    )
    }
}