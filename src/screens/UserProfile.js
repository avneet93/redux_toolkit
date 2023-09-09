import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {userDetails} from '../redux/actions/UserDetails';
import {useSelector} from 'react-redux';

const UserProfile = props => {
  const userList = useSelector(state => state.userDetails.userDetails);

  let [names, setName] = useState('');
  let [color, setColor] = useState('');

  const {navigation} = props;

  const onSave = () => {
    console.log(names, color);
    if (userList.length == 10) {
      alert('maximum values acheived');
      return;
    }
    userDetails({
      name: names,
      favoriteColor: color,
    }),
      navigation.goBack();
  };

  return (
    <View style={styles.mainView}>
      <Text style={styles.heading}>UserProfile</Text>
      <View style={styles.inputView}>
        <TextInput
          value={names}
          placeholder={'enter name'}
          onChangeText={txt => setName(txt)}
          style={styles.inputBox}
        />
        <TextInput
          style={styles.inputBox}
          placeholder={'enter favourite color'}
          value={color}
          onChangeText={txt => setColor(txt)}
        />
      </View>
      <Button
        style={{margin: 24, width: '80%'}}
        title="Save"
        onPress={() => onSave()}
      />
    </View>
  );
};
export default UserProfile;
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    padding: 24,
  },
  inputView: {
    flex: 0.9,
    alignItems: 'center',
  },
  inputBox: {
    borderWidth: 2,

    height: 50,
    width: '100%',
    marginVertical: 4,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
    lineHeight: 24,
  },
});
