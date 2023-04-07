import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { MotiView, MotiText } from 'moti'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

const Header = (props) => {

  return (
    <View className="bg-purple-500 w-full" style={styles.header}>
      <MotiView
        from={{translateY: -150, opacity: 0}}
        animate={{translateY: 0, opacity: 1}}
        transition={{type: 'timing', duration: 800, delay: 200}}
        className="flex flex-row justify-between items-center px-4 pb-8"
      >
        <MotiText
          from={{translateX: -300}}
          animate={{translateX: 0}}
          transition={{type: 'timing', duration: 800, delay: 800}}
          className="text-xl font-semibold text-white"
        >
          { props.name }
        </MotiText>
        <TouchableOpacity activeOpacity={0.7} className="p-4 bg-white/30 rounded-full">
          <Feather name="user" size={24} color="white" />
        </TouchableOpacity>
      </MotiView>
    </View>
  )
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingTop: statusBarHeight,
  }
})