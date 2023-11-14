import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, Image, Text } from 'react-native';
const DATA = [{
  id: '1',
  title: 'Red Maple',
  imageUrl: 'https://tinyurl.com/42evm3m3'
}, {
  id: '2',
  title: 'Dogwood',
  imageUrl: 'https://tinyurl.com/42evm3m3'
}, {
  id: '3',
  title: 'Japanese Maple',
  imageUrl: 'https://tinyurl.com/42evm3m3'
}, {
  id: '4',
  title: 'Cherry Blossom',
  imageUrl: 'https://tinyurl.com/42evm3m3'
}, {
  id: '5',
  title: 'Yellowwood',
  imageUrl: 'https://tinyurl.com/42evm3m3'
}, {
  id: '6',
  title: 'Ginkgo',
  imageUrl: 'https://tinyurl.com/42evm3m3'
}];

const TreeGalleryScreen = () => {
  const renderItem = ({
    item
  }) => <Image source={{
    uri: item.imageUrl
  }} style={styles.image} />;

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Colorful Trees Gallery</Text>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} numColumns={2} contentContainerStyle={styles.listContainer} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  listContainer: {
    paddingBottom: 20
  },
  image: {
    width: '45%',
    aspectRatio: 1,
    marginHorizontal: '2.5%',
    marginBottom: 10,
    borderRadius: 10
  }
});
export default TreeGalleryScreen;