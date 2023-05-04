import React, { useState, useEffect }from "react";
import {SafeareaView, View, Text,TouchableOpacity,FlatList} from 'react-native'

import database from "../../../config/firebaseconfig";
import styles from "./style"
export default function Task(){
    const[task, setTask] = useState([])

    useEffect(() =>{
        database.collection("Tasks").onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push
            }

            )
        }

        )
    },
    [])
    return(
        <View>
            <Text>Page Tasks</Text>
        </View>
    )
}