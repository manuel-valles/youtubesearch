// Import the module React to deal with Components
import React, {Component} from 'react';
// Import the module ReactDOM to Render Components to the DOM
import ReactDOM from 'react-dom';
// Import the SearchBar
import SearchBar from './components/search_bar';
// Import Youtube API
import YTSearch from 'youtube-api-search';
// Import the VideoList
import VideoList from './components/Video_list';
// Import the VideoDetail
import VideoDetail from './components/Video_detail';

// Our React Component - App
// Data changing over time - Class based Component
class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		};
		this.videoSearch('coding');
	}
	// Method for searching videos
	videoSearch(term){
		// Immediate some data - No just an empty array
		YTSearch({key: API_KEY, term}, videos=>{
			this.setState({
				videos,
				selectedVideo: videos[0]
			});
		});
	}
	render(){
		return(
		<div>
			<SearchBar onSearchTermChange={term=>this.videoSearch(term)}/>
			<div className="row">
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList
					onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
					videos={this.state.videos}/>
			</div>
		</div>
		);
	}
};

ReactDOM.render(<App />, document.querySelector('.container'));