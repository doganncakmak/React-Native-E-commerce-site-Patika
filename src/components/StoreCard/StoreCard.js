import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './StoreCard.style';


const StoreCard = ({store}) => {
 
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: store.imgURL}}/>
            <View style={styles.inner_container}> 
                <Text style={styles.tittle}>{store.title}</Text>
                <Text style={styles.text}>{store.price}</Text>
                <Text style={styles.stock}>{store.inStock}</Text>
            </View>
        </View>

    )
}

export default StoreCard;