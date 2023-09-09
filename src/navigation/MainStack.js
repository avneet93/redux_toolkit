import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {HomeScreen, UserListScreen, UserProfile} from '../screens'

const Stack = createStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="UserList" component={UserListScreen} />
      <Stack.Screen name="UserProfile" component={UserProfile}/>
    </Stack.Navigator>
  )
}

export default MainStack

