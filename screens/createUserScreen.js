import React,{useState} from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native'
import firebase from '../db/firebase'
const CreateUserScreen = ({navigation}) => {
    const [state, setState] = useState({
        name:'',
        email:'',
        phone:''
    })
    const handleChangeText=(name,value)=>{
        setState({...state,[name]:value})
    }
    const addNewUser= async()=>{
        if(state.name===''){
            alert('Please provide a name');
        }else{
            try {
                await firebase.db.collection('users').add({
                    name:state.name,
                    email:state.email,
                    phone:state.phone
                });
            } catch (error) {
                console.log(error);
            }
            navigation.navigate('UsersList');
        }
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Nombre de usuario" onChangeText={(value)=>handleChangeText('name',value)}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Email de usuario" onChangeText={(value)=>handleChangeText('email',value)}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Teléfono de usuario" onChangeText={(value)=>handleChangeText('phone',value)}/>
            </View>
            <View>
                <Button title="Guardar usuario" onPress={addNewUser}/>
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
export default CreateUserScreen
