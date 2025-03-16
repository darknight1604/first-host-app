import React, {  Button, Text} from 'react-native';
import BaseView from '@host-app/common/components/base-view';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';

const HomePage = () => {
  const signIn = async () => {
    // try {
    //   await GoogleSignin.hasPlayServices();
    //   const response = await GoogleSignin.signIn();
    //   Alert.alert(response?.toString());
    // } catch (error) {
    //   Alert.alert('error');
    // }
  };

  return (
    <BaseView>
      <Text>Home page</Text>
      <Button title="123" onPress={signIn} />
    </BaseView>
  );
};

export default HomePage;
