import { StyleSheet, View, Text, Button, SafeAreaView } from "react-native";

export const ListItem = ( {item, index, onDelete}) => {
    return ( 
        <View style={styles.itemContainer}>
            <View style={styles.item}>
            <Text style={styles.name}>{item}</Text> 
            <Button
                title= 'clear 🧹'
                onPress={() => onDelete(index)}
                color='mediumorchid'
            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer:{
        paddingTop:10,
        paddingBottom:10
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        rowGap: 10,
        alignContent:'center'
    },
    name : {
        fontWeight: 'bold',
        fontSize: 20,
        paddingEnd: 10
    }
  });