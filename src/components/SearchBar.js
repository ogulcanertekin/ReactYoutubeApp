import React from 'react';

class SearchBar extends React.Component{

    state={term:''};

    onInputChange=(event)=>{
        this.setState({term:event.target.value});
    };

    onFormSubmit=(event)=>{
        event.preventDefault();
        
        this.props.onFormSubmitProp(this.state.term);          //onFormSubmit prop app.jste bizim gönderdigimiz property.Callback için yani herşeyi app.js içerisinde toplamak için!!burası aslında app.js içerisinde onTermSubmit calıstıracak ! ve stte oraya gönderilecek.
    };

    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Serch</label>
                        <input 
                        type="text" 
                        value={this.state.term}
                        onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;