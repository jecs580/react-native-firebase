import React,{useState} from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native'
const CreateUserScreen = () => {
    const [state, setState] = useState({
        name:'',
        email:'',
        phone:''
    })
    const handleChangeText=(name,value)=>{
        setState({...state,[name]:value})
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
                <Button title="Guardar usuario" onPress={()=>{console.log(state);}}/>
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
