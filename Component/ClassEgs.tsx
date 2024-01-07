// import  { Component, useState } from 'react';
// import { View } from 'react-native';

// class User extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: 'yasir'
//         };
//     }

//     render() {
//         return (
//             <View>
//                 {this.state.name}
//             </View>
//         );
//     }
// }

// export default User;


// import React, { Component } from "react";

// class ClassComponent extends React.Component {
// 	constructor() {
// 		super();
// 		this.state = { count: 0 };

// 		// Binding the increase method to the instance
// 		this.increase = this.increase.bind(this);
// 	}

// 	// Method to increase the count state
// 	increase() {
// 		this.setState((prevState) => ({ count: prevState.count + 1 }));
// 	}

// 	render() {
// 		return (
// 			<div style={{ margin: '50px' }}>
// 				<h1>Welcome to Geeks for Geeks</h1>
// 				<h3>Counter App using Class Component:</h3>
                
// 				<h2>{this.state.count}</h2>
// 				<button onClick={this.increase}>Add</button>
// 			</div>
// 		);
// 	}
// }

// export default ClassComponent;
