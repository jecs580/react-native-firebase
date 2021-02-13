import React,{useState,useEffect} from 'react'
import { View, Text, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import firebase from '../db/firebase'
import { ListItem, Avatar } from 'react-native-elements'
const userListScreen = ({navigation}) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        firebase.db.collection('users').onSnapshot(query=>{
            const users=[]
            query.docs.forEach((doc)=>{
                users.push({...doc.data(),id:doc.id});
            });
            setUsers(users)
        });
    }, []);
    return (
        <ScrollView>
            <Button title="Create User" onPress={()=>{navigation.navigate('CreateUserScreen')}}/>
            {
                users.map(user=>{
                    return (
                        <ListItem key={user.id}>
                            <ListItem.Chevron/>
                            <Avatar source={{
                                uri:'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365cde3787b2187a1f0fbc/impresion-cara.jpg'
                            }}
                            rounded/>
                            <ListItem.Content>
                                <ListItem.Title>{user.name}</ListItem.Title>
                                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    )
                })
            }
        </ScrollView>
    )
}

export default userListScreen
