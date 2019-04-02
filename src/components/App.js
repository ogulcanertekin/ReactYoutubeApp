import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{

    state={videos:[],selectedVideo:null};               //selectedVideo state

    onTermSubmit = async (term) =>{
        const response = await youtube.get('/search',{                 //q query string--> q olması youtube documenttionda belirtldigi için.! ?q=
            params:{
                q:term
            }
        });

        this.setState({videos:response.data.items});
    };

    onVideoSelect = (video) =>{                             //Deeply Nested Callbacks!! -Önce VideoListe daha sonra VideoItema prop gönderilecek...
        this.setState({selectedVideo:video});
    };

    //onFormSubmitProp dememeiz gerekiyor ancak karısmasın.! onFormSubmit hatta onTermSubmit de olabilir.
    render(){                                                   //onFormSubmit bizim olusturdugumuz property. SearchBar içerisinde this.props.onFormSubmit!
        return(
            <div className="ui container">
                <SearchBar onFormSubmitProp={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList
                            onVideoSelect={this.onVideoSelect}
                            videos={this.state.videos}
                        /> 
                    </div>
                    </div>
                </div>
                            
            </div>
        );
    }
}

export default App;