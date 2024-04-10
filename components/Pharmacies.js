import {ScrollView, StyleSheet, Text, View, Image} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import React from "react";


function Pharmacies({pharmacies}){
    return (
        <ScrollView style={styles.main}>
            {pharmacies.map((pharmacy, index) => (
                <View style={styles.item} key={index}>
                    <View style={styles.item_head}>
                        <Image style={styles.image_head} source={pharmacy.katastasi === 'False'  ? require('../assets/fsa-kleisto-70.png') : require('../assets/fsa-anoixto-70.png')} />
                        <View style={{paddingTop: 5,marginLeft:3}}>
                            <Text style={styles.item_head_text}>{pharmacy.perioxi}</Text>
                        </View>
                    </View>
                    <View style={styles.item_row}>
                        <Ionicons name={'add'} size={18} />
                        <Text style={styles.item_text}>{pharmacy.farmakeio}</Text>
                    </View>
                    <View style={styles.item_row}>
                        <Ionicons name={'map'} size={18} />
                        <Text style={styles.item_text}>{pharmacy.dieuthinsi}</Text>
                    </View>
                    <View style={styles.item_row}>
                        <Ionicons name={'time'} size={18} />
                        <Text style={styles.item_text}>{pharmacy.orario}</Text>
                    </View>
                    <View style={styles.item_row}>
                        <Ionicons name={'call'} size={18} />
                        <Text style={styles.item_text}>{pharmacy.tilefono}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    )
}

export default Pharmacies;

const styles = StyleSheet.create({
    main:{
        marginTop: 10
    },
    item:{
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'black',
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: 10,
        marginHorizontal: 14,
        width: '90%'
    },
    item_row:{
        flexDirection: 'row',
        paddingVertical: 4,
    },
    item_head:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        borderBottomWidth: 1
    },
    image_head:{
        width: 30,
        height: 30,
        marginRight: 3
    },
    item_head_text:{
        textAlign: 'center',
        fontWeight: 'bold'
    },
    item_text:{
        paddingLeft: 5,
    }
});