import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React,{useState, useEffect} from 'react';

const FilterTasks = (props) => {

    const selectedColor = '#F35740'
    const deselectedColor = '#FFFFFF'
    const [allBtn,setSelectAll] = useState(selectedColor);
    const [activeBtn,setSelectActive] = useState(deselectedColor);
    const [doneBtn,setSelectDone] = useState(deselectedColor);

    useEffect(()=>{
        setSelectAll(selectedColor)
        setSelectActive(deselectedColor)
        setSelectDone(deselectedColor)
    },[])

    const styles = StyleSheet.create({
        buttons_container: {
            flexDirection: 'row',
            marginTop: 25,
            paddingStart: 13,
            paddingEnd: 13
        },
        button: {
            // backgroundColor: '#F35740',
            height: 37,
            borderRadius: 20,
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            marginStart: 10,
            marginEnd: 10
        }
    });

    const selectAll = () => {
        setSelectAll(selectedColor)
        setSelectActive(deselectedColor)
        setSelectDone(deselectedColor)
        props.handleSelection('all')

    }

    const selectActive = () => {
        setSelectAll(deselectedColor)
        setSelectActive(selectedColor)
        setSelectDone(deselectedColor)
        props.handleSelection('active')
    }

    const selectDone = () => {
        setSelectAll(deselectedColor)
        setSelectActive(deselectedColor)
        setSelectDone(selectedColor)
        props.handleSelection('done')
    }


    return (<View style={styles.buttons_container}>
        <TouchableOpacity onPress={selectAll} style={[styles.button,{backgroundColor: `${allBtn}`,}]}>
            <Text>ALL</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={selectActive} style={[styles.button,{backgroundColor: `${activeBtn}`,}]}>
            <Text>ACTIVE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={selectDone} style={[styles.button,{backgroundColor: `${doneBtn}`,}]}>
            <Text>DONE</Text>
        </TouchableOpacity>
    </View>)


}


export default FilterTasks
