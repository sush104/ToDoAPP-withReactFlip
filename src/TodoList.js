import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";
class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      error: "",
      msg: "",
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    e.preventDefault();
    const raw = this._inputElement.value;
    const value = raw ? raw.trim() : "";

    if (!value) {
      this.setState({ error: "Please enter a non-empty task." });
      return;
    }

    const newItem = {
      text: value,
      key: Date.now(),
    };

    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      error: "",
    }));

    this._inputElement.value = "";
  }

  deleteItem(key, text) {
    // ask for confirmation before deleting
    const confirmMsg = `Remove "${text}"?`;
    if (!window.confirm(confirmMsg)) return;

    const filteredItems = this.state.items.filter(function (item) {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems,
      msg: `Removed: ${text}`,
    });

    // clear message after 3 seconds
    setTimeout(() => this.setState({ msg: "" }), 3000);
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              ref={(a) => (this._inputElement = a)}
              placeholder="enter task"
            />
            <button type="submit">add</button>
          </form>
          {this.state.error && (
            <div className="todo-error">{this.state.error}</div>
          )}
          {this.state.msg && <div className="todo-msg">{this.state.msg}</div>}
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default TodoList;
