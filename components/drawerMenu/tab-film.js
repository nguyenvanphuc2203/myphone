import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Button,
  Alert,
  Dimensions
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { TabNavigator } from 'react-navigation';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
/* get width, height */

class Showing extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      entries: [
        {title:'loading...',release_date:'loading...',poster_path:'/jV8wnk3Jgz6f7degmT3lHNGI2tK.jpg'},
        {title:'loading...',release_date:'loading...',poster_path:'/jV8wnk3Jgz6f7degmT3lHNGI2tK.jpg'},
        {title:'loading...',release_date:'loading...',poster_path:'/jV8wnk3Jgz6f7degmT3lHNGI2tK.jpg'}
      ],
    }
  }
  componentWillMount(){
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=e8631f0c8f0363c450d47ace4043eca5')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({entries: responseJson.results});
      })
      .catch((error) => {
        console.error(error);
      });
  }
  _renderItem ({item, index }) {
        var poster = 'https://image.tmdb.org/t/p/w500'+item.poster_path;
        return (
            <TouchableOpacity onPress={()=>{ this.props.screenProps.navigation.navigate('Item',{id:item.id}) }}>
            <View style={{width:viewportWidth*0.575,backgroundColor:'#333',marginTop:13,marginBottom:13}}>
                <Image source={{uri:poster}} style={{width:viewportWidth*0.575,height:viewportHeight*0.5}} />
                <Text  style={{color:'#fff',padding:2}}>{ item.title }</Text>
                <Text style={{color:'#fff',padding:2}}>2h30p - Ngay {item.release_date}</Text>
            </View>
          </TouchableOpacity>
        );
    }
  render() {
    return (
      <View style={{backgroundColor:'#333'}}>
        <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.state.entries}
            renderItem={this._renderItem.bind(this)}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth*0.575}
            firstItem={0}
            loop={true}
            autoplay={true}
            autoplayDelay={1000}
          />
      </View>
    );
  }

}

class Comming extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      entries: [
        {title:'loading...',release_date:'loading...',poster_path:'/jV8wnk3Jgz6f7degmT3lHNGI2tK.jpg'},
        {title:'loading...',release_date:'loading...',poster_path:'/jV8wnk3Jgz6f7degmT3lHNGI2tK.jpg'},
        {title:'loading...',release_date:'loading...',poster_path:'/jV8wnk3Jgz6f7degmT3lHNGI2tK.jpg'}
      ],
    }
  }
  componentWillMount(){
    fetch('http://api.themoviedb.org/3/movie/upcoming?api_key=e8631f0c8f0363c450d47ace4043eca5')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({entries: responseJson.results});
      })
      .catch((error) => {
        console.error(error);
      });
  }
  _renderItem ({item, index }) {
        var poster = 'https://image.tmdb.org/t/p/w500'+item.poster_path;
        return (
            <TouchableOpacity onPress={()=>{ this.props.screenProps.navigation.navigate('Item',{id:item.id}) }}>
            <View style={{width:viewportWidth*0.575,backgroundColor:'#333',marginTop:13,marginBottom:13}}>
                <Image source={{uri:poster}} style={{width:viewportWidth*0.575,height:viewportHeight*0.5}} />
                <Text  style={{color:'#fff',padding:2}}>{ item.title }</Text>
                <Text style={{color:'#fff',padding:2}}>2h30p - Ngay {item.release_date}</Text>
            </View>
          </TouchableOpacity>
        );
    }
  render() {
    return (
      <View style={{backgroundColor:'#333'}}>
        <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.state.entries}
            renderItem={this._renderItem.bind(this)}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth*0.575}
            firstItem={0}
            loop={true}
            autoplay={true}
            autoplayDelay={1000}
          />
      </View>
    );
  }

}


export default TabNavigator({
  'Đang Chiếu': { screen: props => {
    return <Showing screenProps={{navigation:props.screenProps.navigation }}/>}
   },
  'Sắp Chiếu': { screen: props => {
    return <Comming screenProps={{navigation:props.screenProps.navigation }}/>}
   },
},
{
  tabBarOptions: {
    activeTintColor: '#fff',
    activeTabStyle: {
      color:"#fff",
      backgroundColor: '#333',
    },
    style: {
      backgroundColor: 'black',
    },
  }
});
