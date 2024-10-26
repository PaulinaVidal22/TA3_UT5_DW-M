import { StyleSheet, View, Button } from 'react-native';
import { InputBar } from './inputBar';

export const InputArea = ({onChangeText, text, handlePress}) => {
    return (
        <View style={styles.inputArea}>
        <InputBar onChangeText={onChangeText} text={text}/>
        <Button
          title="Submit"
          onPress={handlePress}
          color='orchid'
        />
      </View>
    );
}

const styles = StyleSheet.create({
    inputArea: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 10
    },
  });