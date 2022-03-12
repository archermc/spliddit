import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5ea5d1',
  },
  marginBottom: {
    marginBottom: 10
  },
  title: {
    marginTop: Platform.OS === 'ios' ? 40 : 30,
    flex: 1,
    flexBasis: 20,
    alignItems: "center"
  },
  buttonsContainer: {
    flex: 1,
    flexBasis: 80,
    flexDirection: "column",
    marginLeft: "10%",
    marginRight: "10%",
  }
});
