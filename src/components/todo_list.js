import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import TodoItem from './todo_item';

import {
  deleteItem
} from '../redux/actions';

class TodoList extends Component {
  getTodos() {
    let { todos } = this.props;
    if (!todos.length) {
      return (
        <h5 className="inst_text">{"Add Notes to display"}</h5>
      );
    } else {
      return(
        <div className="notes_section">
          {todos.map(item =>
            <TodoItem
              key={item.id}
              item={item}
              deleteItem={this.props.deleteItem}
            />
          )}
        </div>
      );
    }
  }

  render() {
    return(
      <div className="notes_list">
        {this.getTodos()}
      </div>
    );
  }
}
  TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string
    })).isRequired,
    deleteItem: PropTypes.func.isRequired,
  }


const mapStateToProps = (state) => (
  {todos: state.todos}
)

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({deleteItem}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
