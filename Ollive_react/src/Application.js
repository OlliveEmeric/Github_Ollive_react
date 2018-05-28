import React, { Component } from 'react';
import logo from './logo.svg';
import './Application.css';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import {
	create_user,
	create_message
} from "./services/chat/actions";

class Application extends Component {

	state = {
		prenom: "",
		nom: "",
		email: ""
	}

	render() {
		return (
			<div className="App">

				{
					this.props.chat.user.prenom === undefined ?
						<div>
							prenom : <input type="text" onChange={(e) => { this.setState({ prenom: e.target.value }) }} /><br></br>
							nom : <input type="text" onChange={(e) => { this.setState({ nom: e.target.value }) }} /><br></br>
							email : <input type="text" onChange={(e) => { this.setState({ email: e.target.value }) }} /><br></br>
						
							<button onClick={() => {
								this.props.create_user(this.state.prenom, this.state.nom, this.state.email)
								//console.log(this.props.chat.user.prenom)
							}} >validate</button>
						</div>
					:
						<div>
							{this.props.chat.user.prenom}


							Message : <input type="text" onChange={(e) => {this.setState({ message: e.target.value}) }}/><br></br>
							<button onClick={() =>{
								this.props.create_message(this.state.prenom, this.state.message)
								console.log(this.props.chat.message)
							}} >validate</button>
						</div>
				}

			</div>
		);
	}

}

const mapStateToProps = (state) => ({
	chat: state.chat,
});

const mapActionsToProps = (dispatch) => ({
	create_user: bindActionCreators(create_user, dispatch),
	create_message: bindActionCreators(create_message, dispatch),
});

export default connect(mapStateToProps, mapActionsToProps)( Application );
