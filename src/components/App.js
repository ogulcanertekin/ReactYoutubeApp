import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component{

    state={videos:[]};

    onTermSubmit = async (term) =>{
        const response = await youtube.get('/search',{                 //q query string--> q olması youtube documenttionda belirtldigi için.! ?q=
            params:{
                q:term
            }
        });

        this.setState({videos:response.data.items});
    };

    //onFormSubmitProp dememeiz gerekiyor ancak karısmasın.! onFormSubmit hatta onTermSubmit de olabilir.
    render(){                                                   //onFormSubmit bizim olusturdugumuz property. SearchBar içerisinde this.props.onFormSubmit!
        return(
            <div className="ui container">
                <SearchBar onFormSubmitProp={this.onTermSubmit}/>
                Found {this.state.videos.length} videos.
            </div>
        );
    }
}

export default App;