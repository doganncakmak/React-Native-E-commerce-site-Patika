import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 2,
    borderRadius: 10,
    height: Dimensions.get('window').height /2 ,
    width: Dimensions.get('window').width /2 ,
    
  },
  image: {
    height: Dimensions.get('window').height /3 ,
    width: Dimensions.get('window').width /3 ,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginLeft: 30,
  },
  tittle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  text:{
    fontWeight: 'gray',
    fontSize: 15,
  },
  stock:{
    fontWeight: 'bold',
    fontSize: 15,
    color: "red",
    marginTop: 5,
  },
  inner_container: {
    padding: 5,
  },
});