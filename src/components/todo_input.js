import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import uuid from 'uuid';
import PropTypes from 'prop-types';

import { addItem } from '../redux/actions';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
	  body: '',
	  addNote: false
    }
  }
  onTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  }
  onBodyChange(e) {
    this.setState({
      body: e.target.value
    });
  }
  addNote(e) {
    this.setState({
      addNote: true
    });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.addItem({
      id: uuid.v4(),
      title: this.state.title,
      body: this.state.body
    });
    this.setState({title: '', body: ''})
  }
  render() {
    return(
	<div> 
			 <div className="text-right mt-3 mb-2 mr-3">
                    <button className="btn btn-default" onClick={this.addNote.bind(this)}>
					<span className="glyphicon glyphicon-plus"></span> Add Note</button>
                </div>
			 {
				 (this.state.addNote) ?
				<div className="modal-body">
                <label htmlFor="defaultFormNameModalEx">Title:</label>
                <input type="text"
				id="defaultFormNameModalEx"
				className="form-control form-control-sm"
				value={this.state.title}
				onChange={this.onTitleChange.bind(this)}
				/>
				
                <br/>
                
                <label htmlFor="defaultFormMessageModalEx">Body:</label>
                <textarea type="text"
				id="defaultFormMessageModalEx"
				className="md-textarea form-control"
				value={this.state.body}
              onChange={this.onBodyChange.bind(this)}
				></textarea>

                <div className="text-right mt-4 mb-2">
                    <button className="btn btn-primary" onClick={this.onSubmit.bind(this)} disabled={!this.state.title || !this.state.body}>Save</button>
                </div>

            </div>
			: null
			 }
	</div>
    );
  }
}
  TodoInput.propTypes = {
    addItem: PropTypes.func.isRequired,
  }

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(({addItem}), dispatch)
)

export default connect(null, mapDispatchToProps)(TodoInput);
