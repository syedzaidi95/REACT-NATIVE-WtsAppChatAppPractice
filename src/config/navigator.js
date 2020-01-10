import React from "react";
import { createMaterialTopTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation";
import { View, Text } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons'
import * as MainRoutes from '../MainScreens';
import LoginForm from '../AuthScreens/login';
import SignUpForm from '../AuthScreens/SignUp';
import AuthVerify from '../AuthScreens/authVerify';



// const CameraIcon = "<Entypo name='camera' size={25} color='white' />"
const TabNavigators = createMaterialTopTabNavigator({
    camera: MainRoutes.MainCamera,
    chats: MainRoutes.Chats,
    status: MainRoutes.Status,
    calls: MainRoutes.Calls
}, {
        initialRouteName: 'chats',
        backBehavior: 'history',
        tabBarOptions: {
            style: {
                backgroundColor: '#047a6c',
            },
            indicatorStyle: {
                backgroundColor: 'white',
            },
            showIcon: true,
        },
    })
const App = createStackNavigator({
    MainNavigaotr: {
        screen: TabNavigators,
        navigationOptions: () => ({
            title: `WhatsApp`,
            headerRight: (
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Ionicons name='md-search' size={25} color='white' />
                    <Entypo name='dots-three-vertical' size={18} color='white' style={{ marginRight: 10, marginLeft: 20 }} />
                </View>
            )
        }),
    },
    CahtOpenScreen: {
        screen: MainRoutes.ChatOpen,
        navigationOptions: () => ({
            title: 'has',
            headerRight: (
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Ionicons name='md-videocam' size={25} color='white' />
                    <Ionicons name='md-call' size={25} color='white' style={{ marginLeft: 25 }} />
                    <Entypo name='dots-three-vertical' size={18} color='white' style={{ marginRight: 10, marginLeft: 25 }} />
                </View>
            )
        }),
    }
},
    {
        defaultNavigationOptions: {

            headerStyle: {
                backgroundColor: '#047a6c'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
        }
    }
)
const login = createStackNavigator({
    screen: LoginForm
}, {
        defaultNavigationOptions: {
            title: `WhatsApp`,
            headerStyle: {
                backgroundColor: '#047a6c'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
        }
    })
const signUp = createStackNavigator({
    screen: SignUpForm,
}, {
        defaultNavigationOptions: {
            title: `WhatsApp`,
            headerStyle: {
                backgroundColor: '#047a6c'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
        }
    })
const authchecker = createStackNavigator({
    screen: AuthVerify
}, {
        defaultNavigationOptions: {
            title: `WhatsApp`,
            headerStyle: {
                backgroundColor: '#047a6c'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
        }
    })
const AuthSwitch = createSwitchNavigator(
    {
        AuthLoading: authchecker,
        login: login,
        signUp: signUp,
        App: App,
    },
    {
        backBehavior: 'none',
        initialRouteName: 'AuthLoading'
    }
)

export default createAppContainer(AuthSwitch);