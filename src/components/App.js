import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

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
        console.log('From the App!',video);
    };

    //onFormSubmitProp dememeiz gerekiyor ancak karısmasın.! onFormSubmit hatta onTermSubmit de olabilir.
    render(){                                                   //onFormSubmit bizim olusturdugumuz property. SearchBar içerisinde this.props.onFormSubmit!
        return(
            <div className="ui container">
                <SearchBar onFormSubmitProp={this.onTermSubmit}/>
                <VideoList
                    onVideoSelect={this.onVideoSelect}
                    videos={this.state.videos}
                />             
            </div>
        );
    }
}

export default App;