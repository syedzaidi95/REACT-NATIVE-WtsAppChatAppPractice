import React, { Component } from 'react';
import { View, Text, TextInput, Button, ImageBackground } from 'react-native'
import { signUp } from '../API,s/firebaseAPI'


class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
        this.signUp = this.signUp.bind(this)
    }

    async signUp() {
        const { email, password } = this.state
        this.props.navigation.navigate('login')
    }
    render() {
        const { email, password } = this.state
        return (
            <View>
                <ImageBackground source={require('../../assets/background.png')} style={{ width: '100%', height: '100%' }}>
                    <Button title='SignUp' onPress={this.signUp} />
                </ImageBackground>
            </View>
        )
    }
}

export default SignUpForm