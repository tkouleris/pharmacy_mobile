import {ScrollView, StyleSheet} from "react-native";
import React from "react";
import Pharmacy from "./Pharmacy";


function Pharmacies({pharmacies}){
    return (
        <ScrollView style={styles.main}>
            {pharmacies.map((pharmacy, index) => (
                <Pharmacy pharmacy={pharmacy} key={index} />
            ))}
        </ScrollView>
    )
}

export default Pharmacies;

const styles = StyleSheet.create({
    main:{
        marginTop: 10
    }
});