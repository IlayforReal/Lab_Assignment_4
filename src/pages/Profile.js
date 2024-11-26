import { View, Text, Button } from 'react-native'
import React from 'react'
import Avatar from '../components/Avatar'
import NameTitle from '../components/NameTitle'
import Feather from '@expo/vector-icons/Feather';

const Profile = () => {

 let [toggle, setToggle] = React.useState(false);

 const handleToggle = () => {
    setToggle(!toggle);
 }

  return (
    <View style={{ padding: 20}}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{ flexDirection: 'row'}}>
            <Avatar width={50} height={50} />
            <Text style={{ fontSize: 30, fontWeight: 'bold'}}>My Profile</Text>
        </View>
        <View>
            <Feather name="bell" size={24} color="black" />
        </View>
      </View>  
      <Avatar toggle={toggle} />
      <NameTitle toggle={toggle} />
     
      <Button title="Toggle" onPress={handleToggle} />
    </View>
  )
}

export default Profile

