import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 3,
    ...Platform.select({
      ios: {
        paddingTop: 45,
      },
      android: {
        paddingTop: 25,
      },
    }),
    paddingBottom: 30,
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 3,
    marginLeft: 16,
    marginRight: 16,
    paddingTop: 20,
    paddingLeft: 14,
    paddingRight: 14,
    ...Platform.select({
      ios: {
        paddingBottom: 0,
      },
      android: {
        paddingBottom: 30,
      },
    }),
  },
  scrollContent: {
    flex: 3,
    marginLeft: 16,
    marginRight: 16,
    paddingTop: 10,
    paddingLeft: 14,
    paddingRight: 14,
  },
  textInput: {
    height: 50,
    color: '#000000',
    borderWidth: 2,
    borderRadius: 80,
    paddingLeft: 15,
    fontSize: 16,
    paddingRight: 15,
    borderColor: '#2196F3',
  },
  textTittle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  buttonRegister: {
    backgroundColor: '#2196F3',
    borderRadius: 80,
    borderColor: '#2196F3',
    height: 50,
    borderWidth: 2,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
  },
  buttonRegisterCancel: {
    backgroundColor: '#DA0B0B',
    borderRadius: 80,
    borderColor: '#DA0B0B',
    height: 50,
    borderWidth: 2,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    paddingTop: 10,
  },
});
export default styles;
