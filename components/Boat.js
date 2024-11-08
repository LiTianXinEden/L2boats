import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";


const styles = StyleSheet.create({

    parent: {
        backgroundColor: '#f6e8b0',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
    },

    title: {
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 2,

    },

    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 8,
    },



    desc: {
        fontStyle: 'italic',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },

    image: {
        width: 400,
        height: 500,
        marginBottom: 20,
    }

});


const Boat = ({icon_name, name, description, picture}) => {
    return (
        <View style={[styles.parent]}>
            <View style={[styles.title]}>
                <Icon name = {icon_name} size={20} color="#5286eb" />

                <Text style={[styles.name]}>{name}</Text>
            </View>
            <Text style={[styles.desc]}>{description}</Text>
            <Image source={picture} style={[styles.image]}></Image>

        </View>
    );
};




export default Boat;
