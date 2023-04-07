import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

const Header = (props) => {

  return (
    <View className="bg-purple-500 w-full" style={styles.header}>
      <View className="flex flex-row justify-between items-center px-4 pb-8">
        <Text className="text-xl font-semibold text-white">{props.name}</Text>
        <TouchableOpacity activeOpacity={0.7} className="p-4 bg-white/30 rounded-full">
          <Feather name="user" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingTop: statusBarHeight,
  }
})