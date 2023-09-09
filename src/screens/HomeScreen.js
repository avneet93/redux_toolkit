import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.heading}>
        Welcome to Redux setup in React Native!
      </Text>
      <View style={styles.textView}>
        <Text style={styles.subheading}>
          Below are the things we are going to do in this project to understand
          Redux.
        </Text>

        <Text style={styles.bullet}>
          1.Add a button that will redirect to a new screen: "User Profile".
        </Text>
        <Text style={styles.bullet}>
          2.Here we will create a user profile screen where we will add a
          username and favorite color. We will save the user from this screen.
          On successful save we will go back to the User List and show the new
          user.
        </Text>
        <Text style={styles.bullet}>
          3.The User List screen should be modified to read it's users from the
          Redux store.
        </Text>
        <Text style={styles.bullet}>
          4.We will add 10 users using new screen, and ensure they show up
          appropriately in the list.
        </Text>
        <Text style={styles.bullet}>
          5.Then style the list screen so that the user's favorite color is the
          background color of their list item.
        </Text>
      </View>
      <View
        style={{
          flex: 0.2,
          justifyContent: 'flex-end',
        }}>
        <Button
          style={styles.btnStyle}
          title="User List"
          onPress={() => navigation.navigate('UserList')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainView: {
    padding: 24,
    flex: 1,
  },
  textView: {
    flex: 0.8,
  },

  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
    lineHeight: 24,
  },
  subheading: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 24,
  },
  bullet: {
    paddingTop: 16,
    paddingLeft: 8,
  },
  btnStyle: {
    marginTop: 50,
    alignSelf: 'flex-end',
  },
});
