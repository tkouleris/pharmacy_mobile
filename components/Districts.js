import {View, Text, ScrollView, StyleSheet, Pressable} from "react-native";

function Districts({navigation, districts, onSelect}){

    function filterPharmacies(district){
        onSelect(district)
        navigation.navigate('Pharmacies')
    }

    return <View style={styles.main}>
        <ScrollView >
            <View style={styles.district} key={-1}>
                <Text>All</Text>
            </View>
            {districts.map((district, index) => (
                <Pressable
                    onPress={filterPharmacies.bind(this, district)} key={index}
                    // style={({pressed})=>[styles.citySelection, pressed && styles.pressed]}
                >
                    <View style={styles.district}>
                        <Text>{district}</Text>
                    </View>
                </Pressable>
            ))}
        </ScrollView>
    </View>
}

export default Districts;

const styles = StyleSheet.create({
    main:{
      marginHorizontal: 15,
      marginVertical: 10
    },
    district:{
        borderWidth: 1,
        borderColor: '#000',
        paddingVertical: 5,
        marginVertical: 5,
        borderRadius: 10,
        paddingLeft:10
    }
})