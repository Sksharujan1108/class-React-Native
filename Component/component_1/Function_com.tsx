import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

function User (emotion) {
    const [name, setName] = useState('vimal');
    const [age, setAge] = useState(20);
    const [isMale, setIsMAle] =useState(true);        
                                                                                                                                                                                                                                                                                                          
   return (
    <View>
        <Text> My Name is {name}</Text>
        <Text>i am {age} Old</Text>
        <Text> I am is {isMale ? "Hello" : "female"}</Text>

        <Text> i am  Feeling is {emotion}</Text>
    </View>
   )
}