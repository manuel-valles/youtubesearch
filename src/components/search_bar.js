// Import React, React.Component and ReactDOM
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


// New Class Component - Upgrade of a functional component
class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state = {term: ''};
	}
	render(){
		return (
			<div className="search-bar">
				<input 
				value={this.state.term}	
				onChange={event=>this.setState({term: event.target.value})}/>
			</div>
		);
	}
}

// Export the input Component
export default SearchBar;
