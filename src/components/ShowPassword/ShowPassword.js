import React from 'react';
import './ShowPassword.scss';

class ShowPassword extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      type: 'text',
      score: 'null'
    }
    this.showHide = this.showHide.bind(this);
    this.passwordStrength = this.passwordStrength.bind(this);
  }
  
  showHide(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === 'text' ? 'password' : 'text'
    })  
  }
  
  passwordStrength(e){
    if(e.target.value === ''){
      this.setState({
        score: 'null'
      })
    }
    else{
      var pw = window.zxcvbn(e.target.value);
      this.setState({
        score: pw.score
      });      
    }

  }
  
  render(){
    return(
      <>
        <label className="password">Password
          <span className={`${this.state.type === 'text' ? 'Hide ' : 'Show '} emodgi`} onClick={this.showHide}>{this.state.type === 'text' ? '😳' : '😑'}</span>
        </label>
        <input type={this.state.type} className="password__input" onChange={this.passwordStrength}/>
        <span className="register__strength-bar" data-score={this.state.score} />
      </>
    )
  }
}

export default ShowPassword;