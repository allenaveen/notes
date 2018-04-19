import React from 'react';
import TodoList from '../components/todo_list';
import TodoInput from '../components/todo_input';

const App = () => {
  return(
  <div className="container">
		<div className="panel panel-default">
			<div className="panel-heading">G Notes</div>
				<div className="panel-body">
					<div className="row">
						<div className="col-sm-4">
							<TodoList />
						</div>
						<div className="col-sm-8">
							<TodoInput />
						</div>
					</div>
				</div>
		</div>
	</div>
  );
}

export default App;
