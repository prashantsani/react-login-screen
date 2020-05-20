import React from 'react';
import './InputFields.scss';


class InputFields extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            score: 'null',
            validation_msg: ''
        }
    }
    

    validateField = e => {
        const regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
        const val = e.target.value;

        const showInValid = e =>{
            this.setState({
                score: 0,
                validation_msg:this.props.valid_msg
            });
        }
    
        const showValid = e =>{
            this.setState({
                score: 5,
                validation_msg:''
            });
        }

        if(val===''){
            showInValid(e);
        }

        switch(this.props.type){
            case "email" :
                if(regex_email.test(val)) {
                    showValid(e);
                }else{
                    showInValid(e);
                }
                break;

            case "text" :
                if( val.match(this.props.regex_check)) {
                    showValid(e);
                }else{
                    showInValid(e);
                }
                break;

            default : 
                break;
        }
    }


    render(){
        return(
            <>
    	        <label htmlFor={this.props.id}>{this.props.label}</label>
                <input onChange={this.validateField} type={this.props.type} name={this.props.id} id={this.props.id}/>
                <span className="register__strength-bar" data-score={this.state.score} />
                <span className="register__validation-msg">{this.state.validation_msg}</span>
            </>
        )
      }
}

export default InputFields;