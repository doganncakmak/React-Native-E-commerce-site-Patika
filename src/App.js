import React from 'react';
import { StyleSheet, Text, SafeAreaView,TextInput, FlatList} from 'react-native';
import StoreCard from './components/StoreCard/StoreCard';
import store_data from './store_data.json';

function App() {
  const renderStore = ({item}) => <StoreCard store = {item}/>
  return (
    <SafeAreaView style={styles.containerr}>
      
        <Text style={styles.headerText}>PATİKASTORE</Text> 
        <FlatList
          ListHeaderComponent={() =>(
          <TextInput
            style={styles.input}
            placeholder="Ara..."
          />)}
          keyExtractor={item => item.u_id.toString()}
          data={store_data}
          numColumns={2}
          renderItem={renderStore}
        />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerr: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    borderColor: "#ecef"
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 33,
    marginTop: 50,
    marginLeft: 10,
    margin: 12,
    color: "purple"
  }
});

export default App;
