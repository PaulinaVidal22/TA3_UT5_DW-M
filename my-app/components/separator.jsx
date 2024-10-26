import { StyleSheet, View } from "react-native";


export const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
    separator: {
      marginVertical: 8,
      borderBottomColor: 'orchid',
      borderBottomWidth: StyleSheet.hairlineWidth,
      width: '100%',
    }
  });