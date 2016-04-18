import React, {Component} from 'react';
import Item from './item';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount(){
  }

  render() {
    const vidItems = this.props.vidData.map((item, ind) =>{
      let duration = item.metadata.duration;
      const hours = Math.floor(duration / 3600);
      const minutes = Math.floor(duration/60-hours*60);
      const tempSeconds = duration - Math.floor(duration/60)*60;
      const seconds = tempSeconds > 9 ? tempSeconds : `0${tempSeconds}`
      duration = hours > 0 ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
      return (
              <Item 
              key={ind}
              num={ind < 9 ? `0${ind+1}` : `10`} 
              background={item.thumbnail} 
              url={item.metadata.url}
              title={item.metadata.title}
              snippet={item.metadata.description.slice(0,25) + '...'}
              duration={duration}/>
              )
    })
    const articleItems = this.props.articleData.map((item,ind)=>{
          //diff data is returned for vids + articles, so two return statements
          return (
              <Item 
              key={ind}
              num={ind < 9 ? `0${ind+1}` : `10`} 
              background={item.thumbnail} 
              title={item.metadata.headline} 
              snippet={item.metadata.headline.slice(0,25) + '...'} /> 
              )              
      })
      
    return (
        <div className='container-fluid'>
            <div className='item-list'>
                <ol>
                    {this.props.active === 'videos' ? vidItems : articleItems}
                </ol>
                <div className='see-more'>
                  <p>SEE MORE VIDEOS</p>
                </div>
            </div>
        </div>
    );
  }
}

export default ItemList