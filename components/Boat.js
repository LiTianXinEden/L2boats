import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";


const Boat = ({icon_name, name, description, picture}) => {
    return (
        <View>
            <View style={styles.row}>
                <Icon name = {icon_name} size={20} color= "#2b81d1" />
                <Text style={{fontSize: 20}}>{name}</Text>
            </View>
            <Text>{description}</Text>
            <Image source={picture} style={{width:400, height: 500}}></Image>

        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginTop: 5
    }

});


export default Boat;
