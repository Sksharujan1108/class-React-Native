import React, { Component } from "react";
import { Text, View } from "react-native";

class User extends Component {
	constructor(props) {
		super(props);

		this.state = {
            name : "",
            age : 25,
            isMale : true,
            emotion : "happy", // Add an initial value for 'emotion'
        };
	}

	render() {

        const { name, age, isMale } = this.state; // Include 'emotion' in the destructuring
        const { emotion } = this.props

		return (
			<View>
                <Text> Name is {name} </Text>
                <Text> I am {age} years old </Text>
                <Text> I am a {isMale ? "Male" : "Female"} </Text>
                <Text> Emotion: {emotion} </Text>
            </View>
		);
	}
}

