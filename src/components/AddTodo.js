import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = (input) => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
   

    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button
            onClick={this.handleAddTodo}
            className="btn btn-outline-primary"
            type="button"
            id="button-addon1"
          >
            Add
           
          </button>
        </div>
        <input
          onChange={(e) => this.updateInput(e.target.value)}
          value={this.state.input}
          type="text"
          className="form-control"
          placeholder="type new task"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
      </div>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);
// export default AddTodo;
