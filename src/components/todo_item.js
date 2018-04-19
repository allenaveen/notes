import React, { Component } from 'react';

import PropTypes from 'prop-types';

class TodoItem extends Component {
	constructor(props) {
     super(props);
         this.state = {
            newTitle: this.props.item.title,
			newBody: this.props.item.body,
			editTitle: false,
			editBody: false
         };
     }
	 onBodyClick(e) {
		 e.preventDefault();
		this.setState({
		  editBody: true
		});
	  }
	  onTitleClick(e) {
		  e.preventDefault();
		this.setState({
		  editTitle: true
		});
	  }
	  onTitleSave(e) {
		e.preventDefault();
		this.setState({editTitle: false})
		}
	  onBodySave(e) {
		e.preventDefault();
		this.setState({editBody: false})
		}
	  onTitleUpdate(e) {
		this.setState({
		  newTitle: e.target.value
		});
	  }
	  onBodyUpdate(e) {
		this.setState({
		  newBody: e.target.value
		});
	  }
	render(){
	const deleteItem = () => {
    this.props.deleteItem(this.props.item.id);
  }
  return(
    <div className="list">
      <div className="todo-item">
	  <div className="row">
	  <div className="col-xs-10 col-sm-10 col-md-10">
	  {
		  (this.state.editTitle) ?
		  <div>
		  <input
			className="form__inputText--lg form__inputText--addItem"
			type="text"
			ref="editInput"
			onChange={this.onTitleUpdate.bind(this)}
			value={this.state.newTitle}
				/>
				<button className="save_btn btn btn-primary btn-xs" onClick={this.onTitleSave.bind(this)}>Save</button>
			</div>
		  :
				<h4 className="complete" onClick={this.onTitleClick.bind(this)}>{this.state.newTitle}</h4>
	  }
	  {
		  (this.state.editBody) ?
		  <div>
		  <input
			className="body_text form__inputText--lg form__inputText--addItem"
			type="text"
			ref="editInput"
			onChange={this.onBodyUpdate.bind(this)}
			value={this.state.newBody}
				/>
			<button className="save_btn btn btn-primary btn-xs" onClick={this.onBodySave.bind(this)}>Save</button>
			</div>
				:
				<h5 className="complete" onClick={this.onBodyClick.bind(this)}>{this.state.newBody}</h5>
	  }
	  </div>
	  <div className="col-xs-2 col-sm-2">
		  <button type="button" className="close delete_note" aria-label="Close" onClick={deleteItem}>
			  <span aria-hidden="true">&times;</span>
		  </button>
	  </div>
	  </div>
      </div>
    </div>
  );
}
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string
  }).isRequired,
  deleteItem: PropTypes.func.isRequired
};

export default TodoItem;
