import { StyleSheet, FlatList,  SafeAreaView} from "react-native";
import { ListItem } from "./listItem";

export const List = ({items, onDelete}) => {
    return (
            
            <SafeAreaView>
                <FlatList
                    data={items}
                    renderItem={({ item, index }) => (
                        <ListItem 
                            item={item} 
                            index={index} 
                            onDelete={onDelete} 
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    style={styles.listContainer}
                    contentContainerStyle={{ paddingBottom: 100 }}
                />
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flex:1,
        backgroundColor: '#fff',
        textAlign: 'left',
        paddingTop: 20
      },
  });