import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component{

    onTermSubmit = (term) =>{
        youtube.get('/search',{                 //q query string--> q olması youtube documenttionda belirtldigi için.! ?q=
            params:{
                q:term
            }
        });
    };

    //onFormSubmitProp dememeiz gerekiyor ancak karısmasın.! onFormSubmit hatta onTermSubmit de olabilir.
    render(){                                                   //onFormSubmit bizim olusturdugumuz property. SearchBar içerisinde this.props.onFormSubmit!
        return(
            <div className="ui container">
                <SearchBar onFormSubmitProp={this.onTermSubmit}/>
            </div>
        );
    }
}

export default App;