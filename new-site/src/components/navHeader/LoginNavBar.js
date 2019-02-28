
import React, { Component } from 'react';
import loginTab from '../../misc/openWindow';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class LoginNavBar extends Component{
    constructor(){
        super();
    }
    githubAuth = (event)=>{
		// The process:
		// 1. User clicks and opens the new window via loginTab
        loginTab('http://localhost:3000/auth/github').then((jwt)=>{
            console.log(jwt)
        }).catch((error)=>{
            console.log('THIS IS THE; ', error)
        })
    }
       
    render(){
        let rightNavBar = "";
        if(this.props.auth.username !== undefined){
            // user is logged in!
            console.log('HEYYYY!!!!' ,this.props.auth.username)
            rightNavBar = <span>Welcome, {this.props.auth.username}</span>
        }else{
            // user is not logged in!
            rightNavBar = <span>
                <Link to="/login">Sign in</Link> or <Link to="/register">Register</Link>
                <button type="button" onClick={this.githubAuth} className="btn play-button btn-github">Login with github</button>
            </span>
        }
        console.log(this.props.auth)
        return(
            <div className="login-nav-bar">
                <div className="left valign-wrapper">DevGaming</div>
                <div className="right">
                    {rightNavBar}
                    MY CART 0 ITEM - £0.00
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth
    }
}
export default connect(mapStateToProps)(LoginNavBar);
// export default LoginNavBar;