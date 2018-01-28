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
				onChange={event=>this.onInputChange(event.target.value)}
				placeholder="Search"/>
			</div>
		);
	}
	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

// Export the input Component
export default SearchBar;
