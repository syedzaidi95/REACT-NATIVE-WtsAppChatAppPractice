import React, { Component } from 'react';
import { View, Text, TextInput, Button, ImageBackground } from 'react-native'
import { updateuser } from '../Redux/actions/authAction'
import { connect } from 'react-redux'
import { login } from '../API,s/firebaseAPI'


class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            email: '',
            password: ''
        }
        this.userLogin = this.userLogin.bind(this)
    }

    async userLogin() {
        const { email, password } = this.state
        try {
            const result = await await login(email, password);
            // console.log(result);
            this.props.updateuser(result)
            this.props.navigation.navigate('AuthLoading')
        } catch (e) {
            console.log(e)
        }
    }
    static getDerivedStateFromProps(nextProps) {
        return { user: nextProps.user }
    }
    render() {
        const { email, password } = this.state
        return (
            <View>
                <ImageBackground source={require('../../assets/background.png')} style={{ width: '100%', height: '100%' }}>
                    <Text>SignIn</Text>
                    <TextInput />
                    <TextInput />
                    <Button title='Login' onPress={this.userLogin} />
                    <Button title='SignUp' onPress={() => this.props.navigation.navigate('signUp')} />
                </ImageBackground>
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.reducer.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateuser: (user) => dispatch(updateuser(user)),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)