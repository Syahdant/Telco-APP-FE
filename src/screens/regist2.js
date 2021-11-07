import React, {Component} from 'react';

import {
  View,
  ImageBackground,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

class regist2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view1}>
          <Text style={styles.kembaliText}>Kembali</Text>
          <Text style={styles.btlText}>Batal</Text>
        </View>
        <Text style={styles.regText1}>Langkah 2 dari 3</Text>
        <Text style={styles.registerText}>Verifikasi</Text>
        <Text style={styles.regText2}>
          Registrasikan diri kamu untuk melanjutkan ke tahap verifikasi kode
          OTP.
        </Text>
        <Text style={styles.regText3}>Sudah memiliki akun? Masuk</Text>
        <TextInput
          value={this.state.email}
          style={styles.userName}
          onChangeText={value => this.setState({email: value})}
        />
        <TextInput
          value={this.state.telepon}
          style={styles.userPw}
          onChangeText={value => this.setState({telepon: value})}
        />
        <TextInput
          value={this.state.password}
          style={styles.userPw}
          onChangeText={value => this.setState({password: value})}
        />
        <TextInput
          value={this.state.konfirm}
          style={styles.userPw}
          onChangeText={value => this.setState({konfirm: value})}
        />

        <TouchableOpacity
          style={styles.userMasuk}
          onPress={() => this.props.navigation.navigate('Regist2')}>
          <Text style={{color: '#ffff'}}>Registrasi</Text>
        </TouchableOpacity>
        <Text style={styles.regText1}>
          Dengan melanjutkan anda menyetujui syarat dan kebijakan pribadi kami.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b2a2a',
  },
  view1: {
    flexDirection: 'row',
  },
  kembaliText: {
    color: '#0781C4',
    fontSize: 18,
    marginLeft: 40,
    marginTop: 25,
    textAlign: 'left',
  },
  btlText: {
    color: '#0781C4',
    fontSize: 18,
    textAlign: 'right',
    marginTop: 25,
    marginLeft: 200,
  },
  registerText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 40,
    marginTop: 14,
  },
  regText1: {
    color: '#737474',
    textAlign: 'left',
    marginLeft: 40,
    marginTop: 15,
  },
  regText2: {
    color: '#fff',
    textAlign: 'left',
    marginLeft: 40,
    marginTop: 15,
  },
  regText3: {
    color: '#fff',
    textAlign: 'left',
    marginLeft: 40,
    marginTop: 15,
  },
  userName: {
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginHorizontal: 40,
    marginTop: 37,
    borderColor: '#0781C4',
    color: '#ffff',
  },
  userPw: {
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginHorizontal: 40,
    marginTop: 10,
    borderColor: '#0781C4',
    color: '#fff',
  },
  userMasuk: {
    backgroundColor: '#35d0f3',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
});

export default regist2;
