import { StyleSheet, View, TextInput} from "react-native";

export const InputBar = ({onChangeText, text}) => {
    
  
    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder="write here.."
                value={text}
                />
      </View>

    );
}

const styles = StyleSheet.create({
    input : {
      borderColor:'mediumorchid',
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10
    }
  });