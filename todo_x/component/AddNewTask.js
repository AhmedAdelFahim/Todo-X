import React,{useState} from 'react';
import {StyleSheet, TextInput, View} from "react-native";
import {AntDesign} from "@expo/vector-icons";

const AddNewTask = (props) => {

    const [taskInput,setTaskInput] = useState('')

    const handleChange = (task) => {
        // console.log(task)
        setTaskInput(task)
    }

    return(<View style={styles.add_new_task_container}>
        <TextInput

            style={styles.add_todo_input}
            placeholder="Add New Task"
            value={taskInput}
            onChangeText={handleChange}
        />
        <AntDesign  style={styles.add_btn} size={40} name="pluscircle" color="#F35740" onPress={()=>{taskInput.trim() && props.handleAddNewTask({task:taskInput,id:Date.now(),isDone:false}); setTaskInput(''); }}/>
    </View>)
}

const styles = StyleSheet.create({
    add_new_task_container: {
        // flex: 1,
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'center',
    },
    add_todo_input: {
        backgroundColor: "#ffffff",
        borderRadius: 40,
        height: 40,
        flex: 0.8,
        marginEnd: 0,
        marginStart: 10,
        paddingStart: 17

    },
    add_btn: {
        flex: 0.2,
        marginStart: 20
    }
});


export default AddNewTask
