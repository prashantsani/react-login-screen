import React from 'react';
import './Form.scss';
import ShowPassword from './../ShowPassword/ShowPassword';
import InputFields from './../InputFields/InputFields';

function Form() {
  return (
    <form className="register">
    	<h4 className="register__title">Get Started today!</h4>

      <div className="register__feilds-wrap">
        <fieldset className="register__feild">
          <InputFields id="first_name" type="text" label="First name" 
              regex_check={/^[a-zA-Z\s]+$/} valid_msg="Please Enter Alphabets only" />
        </fieldset>
        <fieldset className="register__feild">
          <InputFields id="last_name" type="text" label="Last name"
              regex_check={/^[a-zA-Z\s]+$/} valid_msg="Please Enter Alphabets only"  />
        </fieldset>
        <fieldset className="register__feild">
          <InputFields id="email" type="email" label="Email" 
            valid_msg="Please Enter Valid Email Address" />
        </fieldset>
        <fieldset className="register__feild">
          <ShowPassword />
        </fieldset> 
      </div>

      <input type="submit" className="register__submit"/>
      
      <small className="register__terms">You agree to <a href="#">our terms and conditions</a></small>
      
    </form>
  );
}

export default Form;
