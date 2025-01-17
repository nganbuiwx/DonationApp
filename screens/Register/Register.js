import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView, Text, Image} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import BackButton from '../../components/BackButton/BackButton';
import {createUser} from '../../api/user';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets>
        <View style={globalStyle.BackButton}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        <View style={style.registerContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={style.logo}
          />
          <Text style={globalStyle.header}>Register Account!</Text>
          <Input
            title={'First & Last Name'}
            isSecureTextEntry={false}
            keyboardType={'default'}
            value={name}
            onChangeText={value => setName(value)}
            placeHolder={'Enter your name'}
          />

          <Input
            title={'Email'}
            isSecureTextEntry={false}
            value={email}
            keyboardType={'email-address'}
            onChangeText={value => setEmail(value)}
            placeHolder={'Enter your email'}
          />
          <Input
            title={'Password'}
            isSecureTextEntry={true}
            value={password}
            keyboardType={'default'}
            onChangeText={value => setPassword(value)}
            placeHolder={'*********'}
          />
          {error.length > 0 && <Text style={style.errorMessage}>{error}</Text>}
          {success.length > 0 && (
            <Text style={style.successMessage}>{success}</Text>
          )}
          <Button
            isDisabled={
              name.length <= 2 || email.length <= 5 || password.length < 6
            }
            title={'Register'}
            onPress={async () => {
              let user = await createUser(name, email, password);
              if (user.error) {
                setError(user.error);
              } else {
                setError('');
                setSuccess('Your account has been registered.');
                setTimeout(
                  () => navigation.navigate('Login', {email, password}),
                  1000,
                );
              }
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
