import React, {Component} from 'react';

class Item extends Component {
	constructor(props){		
		super(props);

		this.hoverHandle = this.hoverHandle.bind(this)

		this.state = {
			hover: false
		}
	}

	hoverHandle(){
		this.setState({
			hover: !this.state.hover
		})
	}
	render(){
    const background = `url(${this.props.background})`
    const id=`i${this.props.num.toString()}`;
    return (
    	<a href={this.props.url ? this.props.url : '#'} target='_blank'>
        <li
        className='row'
        id={id}
        onMouseEnter={this.hoverHandle}
        onMouseLeave={this.hoverHandle}
        style={this.state.hover ? {backgroundImage: background} : {}}>
	        	        
	        <div>
	    			<p className='bold num'>{this.props.num}</p>
		        <p className='bold' style={{display: 'inline', overflow: 'hidden'}}>{this.props.title}</p>
		        	<p className='time' style={{float: 'right'}}>{this.props.duration ? this.props.duration : ''}</p>		        
		        <p className='subtext'>{this.props.snippet}</p>
	        </div>        
        </li>
      </a>
    );
  }
};

export default Item;