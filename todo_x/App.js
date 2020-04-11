import React,{useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import AddNewTask from "./component/AddNewTask";
import FilterTasks from "./component/FilterTasks";
import Item from "./component/Item";



export default function App() {

    const [data,setData] = useState([])
    const [allData,setAllData] = useState([])
    const [selection,setSelection] = useState('all')
    const handleAddNewTask = (task) => {
        // setData(data.concat(task))
        setAllData(allData.concat(task))
    }


    useEffect(()=>{
        handleSelection(selection)
    },[selection,allData])


    const handleSelection = () => {
        if(selection === 'all') {
            setData(allData)
        } else if(selection === 'active') {
            setData(allData.filter(task=> !task.isDone))
        } else if(selection === 'done') {
            setData(allData.filter(task=> task.isDone))
        }
    }

    const changeState = (id)=>{
        // console.log(id)
        setAllData(allData.map(task=>{
            if(task.id  === id)
            {
                console.log(data)
                return {...task,isDone:!task.isDone}
            }
            return task
        }))
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>ToDo-X</Text>
            <AddNewTask handleAddNewTask={handleAddNewTask}/>
            <FilterTasks  handleSelection={setSelection}/>
            <View style={styles.listview}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <Item task={item} changeState={changeState} />}
                    keyExtractor={item => item.id}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#10081F',
        alignItems: 'center',
        marginTop: 30
    },
    title: {
        color: "#F35740",
        fontWeight: "bold",
        fontSize: 45
    },
    listview:{
        flexDirection:'row',
        marginTop: 20
    }

});
