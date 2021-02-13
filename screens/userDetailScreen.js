import React, {useEffect, useState} from 'react'
import { Alert } from 'react-native'
import { ActivityIndicator } from 'react-native'
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native'
import firebase from '../db/firebase'
const userDetailScreen = ({route, navigation}) => {
    const [user, setUser] = useState({
        id:'',
        name:'',
        email:'',
        phone:''
    })
    const [loading, setloading] = useState(true)
    const getUserById=async (id)=>{
        const dbRef = firebase.db.collection('users').doc(id);
        const doc = await dbRef.get();
        const user = doc.data();
        setUser({...user, id:doc.id});
        setloading(false);
    }
    useEffect(() => {
        getUserById(route.params['userId'])
    }, []);
    const handleChangeText=(name,value)=>{
        setUser({...user,[name]:value})
    }
    const deleteUser= async()=>{
        const dbRef = firebase.db.collection('users').doc(route.params['userId']);
        await dbRef.delete();
        navigation.navigate('UsersList')
    }
    const opeConfirmationAlert=()=>{

        // Este metodo lo se podra veerlo desde un celular, no tiene soporte para la web
        Alert.alert('Eliminar el usuario','¿Estas seguro?',[
            {text:'Si',onPress:()=>deleteUser()},
            {text:'No',onPress:()=>console.log('Cancelado')}
        ])
    }
    if(loading){
        return (
            <View>
                <ActivityIndicator size="large" color="#e9e9e9"/>
            </View>
        )
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Nombre de usuario" value={user.name} onChangeText={(value)=>handleChangeText('name',value)}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Email de usuario" value={user.email} onChangeText={(value)=>handleChangeText('email',value)}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Teléfono de usuario" value={user.phone} onChangeText={(value)=>handleChangeText('phone',value)}/>
            </View>
            <View>
                <Button title="Actualizar usuario" />
            </View>
            <View>
                <Button color="#e37399" title="Eliminar usuario" onPress={opeConfirmationAlert}/>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:35,
    },
    inputGroup:{
        flex:1,
        padding:0,
        marginBottom:15,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc'
    }
})
export default userDetailScreen
