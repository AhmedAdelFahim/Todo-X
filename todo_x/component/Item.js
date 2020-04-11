import React from "react"
import {StyleSheet, View, Text} from 'react-native'
import {MaterialIcons, Ionicons} from "@expo/vector-icons";

function Item({task,changeState}) {
    // console.log(props)
    const color = task.isDone ? "#F35740": "#ffffff";
    const lineStyle = task.isDone ? "line-through" : "none";
    const styles = StyleSheet.create({

        item: {
            marginVertical: 4,
            marginHorizontal: 16,
            flexDirection:"row",
            alignItems:"center"
        },
        title: {
            fontSize: 20,
            color,
            marginStart:10,
            textDecorationLine: lineStyle
        },
    });
    return (
        <View style={styles.item}>
            {task.isDone ? <Ionicons onPress={()=>{changeState(task.id)}} size={25} name="md-checkbox-outline" color={`${color}`}/> : <MaterialIcons onPress={()=>{changeState(task.id)}} size={25} name="check-box-outline-blank" color={`${color}`}/>}
            <Text style={styles.title}>{task.task}</Text>
        </View>
    );
}


export default Item
