import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textInput: "", user: [], flag: 0 };
  }
  handleChange1 = (event) => {
    this.setState({ textInput: [event.target.value] });
    console.log(this.state.user);
  };

  deleteuser = (event) => {
    this.state.user.splice(event.target.value, 1);
    this.setState({ flag: 1 });
  };
  handleClick = () => {
    const { textInput, user } = this.state;
    user.push(textInput);
    this.setState({ user, textInput: "" });
  };

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="javascript:void(0)" id="welcome"></a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mynavbar">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <a class="nav-link" href="javascript:void(0)">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="javascript:void(0)">
                    Create Post
                  </a>
                </li>
              </ul>
            </div>
            <div></div>
          </div>
        </nav>
        <div style={{ textAlign: "center" }}>
          <h1>Add Post</h1>
        </div>
        <div className="container"></div>
        <div style={{ margin: "100px", marginLeft: "600px" }}>
          <input
            type="text area"
            placeholder="Post Your Blog Here....."
            style={{ height: "400px", width: "650px" }}
            onChange={this.handleChange1}
          />
        </div>
        <div>
          <button style={{ marginLeft: "750px" }} onClick={this.handleClick}>
            Post
          </button>
        </div>
        {this.state.user.map((user, index) => (
          <Card style={{ width: "26rem", marginLeft: "200px" }}>
            <Card.Body>
              <Card.Title>Post</Card.Title>
              <Card.Text>{user}</Card.Text>
              <Button variant="danger" value={index} onClick={this.deleteuser}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}
