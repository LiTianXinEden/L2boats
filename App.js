import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import Boat from './components/Boat'

const styles2 = StyleSheet.create({
    top: {
        marginTop: 20,
        backgroundColor: '#f6e8b0',
        justifyContent: 'space-between',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        borderWidth: 3,
        borderRadius: 5,
        alignSelf: 'center',
        paddingRight: 10,
        paddingLeft: 10,
    },
});

const AllBoats = () => {
    return (
        <ScrollView>
            <Text></Text>
            <Text style={[styles2.top]}>GetABoat - For Sale</Text>
            <Boat icon_name="sailboat" name ="Sea Ray 500 Sundancer" description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away." picture={require("./img/sea_ray.jpg")} />
            <Boat icon_name="sailboat" name ="Four Winns Horizon 180" description="A sporty look and refined details truly set the Horizon 180 above all others." picture={require("./img/four_winns.jpg")} />
            <Boat icon_name="sailboat" name ="Flipper 640 ST" description="A modern take on the classic, traditional hardtop and perfect for a family picnic." picture={require("./img/flipper.jpg")} />
            <Boat icon_name="sailboat" name ="Princess V48" description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior." picture={require("./img/princess.jpg")} />
            <Boat icon_name="sailboat" name ="Bayliner 175 Bowrider" description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance." picture={require("./img/bayliner.jpg")} />
            <Boat icon_name="sailboat" name ="Fairline Targa 47" description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit." picture={require("./img/fairline.jpg")} />
        </ScrollView>
    );
};

export default AllBoats;
