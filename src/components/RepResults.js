//================================== Import Dependencies ====================>
import React, {Component} from 'react';
import axios from 'axios';

//================================== Define RepResults Component ====================>
export default class RepResults extends Component {

  componentDidMount() {
    axios({
      url:'https://www.googleapis.com/civicinfo/v2/representatives/?key=AIzaSyCG3lSCOT5RHln3050DM4N1rq-D_awsjpE&address=North%20Carolina',
      method:'GET'
    })
    .then(response => {
      console.log(response.data);
    })
  }


  render() {
    return (
      <section className='rep-results'>
        
      </section>
    )
  }
}