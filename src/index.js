// Import the module React to deal with Components
import React from 'react';
// Import the module ReactDOM to Render Components to the DOM
import ReactDOM from 'react-dom';
// Import the SearchBar
import SearchBar from './components/search_bar';
// Import Youtube API
import YTSearch from 'youtube-api-search';


// Example API
YTSearch({key: API_KEY, term: 'reacting'}, function(data){
	console.log(data);
});

// Our React Component - App
const App = ()=>{
	return(
		<div>
			<SearchBar />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('.container'));