import React, {Component} from 'react';

class WelcomeForm extends Component {

    handleChange = (event) => {
        console.log('why', event.target.value);
    }

    

    render(){
        return (
        <>
            <p>Welcome Welcome Welcome</p>
            <input type="text" onChange={this.handleChange}></input>
        </>
        )
    }

}


export default WelcomeForm;