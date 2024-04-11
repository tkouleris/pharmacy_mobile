import {StatusBar} from 'expo-status-bar';
import {Image, StyleSheet, View, Text} from 'react-native';
import {useEffect, useLayoutEffect, useState} from "react";
import Pharmacies from "./components/Pharmacies";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Districts from "./components/Districts";
import {Ionicons} from "@expo/vector-icons";
import * as http from './utils/http'
import LoadingOverlay from "./components/UI/LoadingOverlay";

const Stack = createNativeStackNavigator();
export default function App() {

    const [pharmacies, setPharmacies] = useState([])
    const [districts, setDistricts] = useState([])
    const [districtOption, setDistrictOption] = useState('All')
    const [isLoading, setIsLoading] = useState(false)

    async function getData() {
        setPharmacies([])
        return await http.fetchData()
    }

    function menu(navigation, districts){
        navigation.navigate('Districts', {'districts': districts})
    }

    function selectDistrict(district){
        setDistrictOption(district)
    }

    useEffect(() => {
        setIsLoading(true)
        getData().then((data)=>{
            setDistricts(data.districts)
            setPharmacies(data.pharmacies)
            setIsLoading(false)
        })

    }, []);


    if(isLoading){
        return <LoadingOverlay />
    }

    return (
        <NavigationContainer>
            <StatusBar style="auto"/>
            <Stack.Navigator
                screenOptions={{
                    headerLeft: null,
                    headerBackVisible: false,
                }}
            >
                <Stack.Screen
                    name="Pharmacies"
                    options={({navigation}) => ({
                        // title: 'Φαρμακεία',
                        headerTitle: () =>  {
                                return <View style={{flexDirection: 'row'}}>
                                    <Image style={{width:35, height: 35, marginRight: 3}} source={require('./assets/farmakeio.png')} />
                                    <Text style={{fontSize: 24, marginLeft: 3}}>Φαρμακείο</Text>
                                </View>
                        },
                        headerTitleAlign: 'center',
                        headerLeft: ({tintColor}) => (
                            <Ionicons
                                icon="menu"
                                size={24}
                                color={tintColor}
                                style={{marginRight: 15}}
                                onPress={menu.bind(this,navigation, districts)}
                                name="menu"
                            />
                        ),
                    })}
                >
                    {props => <Pharmacies {...props} pharmacies={pharmacies.filter((p) => districtOption === 'All' || p.perioxi === districtOption)}  />}
                </Stack.Screen>
                <Stack.Screen
                    name="Districts"
                    options={
                        {
                            // title: 'Περιοχές',
                            headerTitle: () =>  {
                                return <View style={{flexDirection: 'row'}}>
                                    <Ionicons
                                        icon="business"
                                        size={24}
                                        style={{marginRight: 1}}
                                        name="business"
                                    />
                                    <Text style={{fontSize: 22, marginLeft: 3}}>Περιοχές</Text>
                                </View>
                            },
                            headerTitleAlign: 'center',
                        }
                    }
                >
                    {props => <Districts {...props} districts={districts} onSelect={selectDistrict} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAE4E2',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
