//================================== Import Dependencies ====================>
import React, {Component} from 'react';


//================================== Define LocaleInput Component ====================>

export default class LocaleInput extends Component {

  constructor(props){
    super(props);

    this.state = {
      searchTerm:''
    }
  }

  onInputChange(e) {
    this.setState({
      searchTerm:e.target
    })
  }

  render() {
    return (

      <section className='locale-input'>
        <label htmlFor='locale' >Where do you Live?</label>
        <input id='locale' onKeyDown={e => this.onInputChange(e)}/>
      </section>

    )


  }
}