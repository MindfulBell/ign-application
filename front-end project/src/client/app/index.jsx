import React, {Component} from 'react';
import {render} from 'react-dom';
import "../public/css/style.scss";
import ItemList from './item_list';
import $ from 'jquery';

// Need to fix data stuff, not pulling data correctly? 
// Styling...done...
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vidData: [],
      articleData: [],
      active: 'videos',
      style: {backgroundColor: '#C20000', color: 'white'}
    };
    
    this.getData = this.getData.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  getData(extension){
      const self = this;
      const URL = `https://ign-apis.herokuapp.com/${extension}`;
      console.log(URL)
      $.ajax({
          url: URL,
          dataType: 'jsonp',
          async: true,
          crossDomain: true
      }).then(function(response){
      	if (extension === 'videos') {
      		console.log('fired')
      		self.setState({vidData: response.data})
      	}
      	else {
      		self.setState({articleData: response.data})
      	}
      });
  }
  
  componentDidMount() {
  	this.getData('videos')
    this.getData('articles')
  }

  handleClick(val){
  	this.setState({active: val})
  }


  render() {
    return (
      <div id='main' className='container'>
        <div className='filterholder'>          
          <button id='articlebutton' className='btn filters'
          style={this.state.active === 'articles' ? this.state.style : {}} 
          onClick={(e)=>{this.handleClick(e.target.innerHTML.toLowerCase())}}>Articles</button>
          <button id='vidbutton' className='btn filters'
          style={this.state.active === 'videos' ? this.state.style : {}} 
          onClick={(e)=>{this.handleClick(e.target.innerHTML.toLowerCase())}}>Videos</button>
        </div>
          <ItemList 
          vidData={this.state.vidData} 
          articleData={this.state.articleData}
          active={this.state.active}/>
      </div>
    );
  }
}

render(
  <App/>, document.getElementById('app'));
