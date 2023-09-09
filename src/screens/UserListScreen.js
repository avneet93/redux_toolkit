import React from 'react';
import {FlatList, StyleSheet, Text, View, Button} from 'react-native';
import {useSelector} from 'react-redux';

let users = [];
for (let i = 0; i < 10; i++) {
  users.push({
    name: `User ${i}`,
    favoriteColor: 'pink',
  });
}

const UserListScreen = ({navigation}) => {
  const state = useSelector(state => state?.userDetails);

  const {userDetails} = state;

  return (
    <View style={{padding: 24}}>
      <Button
        title="User Profile"
        onPress={() => navigation.navigate('UserProfile')}
      />
      <FlatList
        style={{marginTop: 24}}
        data={userDetails.length > 0 ? userDetails : users}
        renderItem={({item}) => {
          return (
            <View
              style={{
                backgroundColor: item.favoriteColor,
                marginBottom: 8,
                padding: 4,
              }}>
              <Text>{item.name}</Text>
              <Text>{item.favoriteColor}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default UserListScreen;
