import { View, Text } from 'react-native';
import { MotiView } from 'moti';

const Balence = (props) => {
  const {balence, expenses} = props;
  return (
    <MotiView
      from={{rotateX: '-100deg', opacity: 0}}
      animate={{rotateX: 0, opacity: 1}}
      transition={{type: 'timing', duration: 900, delay: 300}}
      className="bg-white px-4 mx-6 mt-[-16] rounded-xl flex-row justify-between shadow z-10">

      <View className="py-4">
        <Text className="text-gray-300 text-base font-semibold">Saldo</Text>
        <View className="flex-row space-x-1 items-center">
          <Text className="text-gray-300 pt-1">R$</Text>
          <Text className="text-xl font-semibold text-green-600">{balence}</Text>
        </View>
      </View>

      <View className="py-4">
        <Text className="text-gray-300 text-base font-semibold">Gastos</Text>
        <View className="flex-row space-x-1 items-center">
          <Text className="text-gray-300 pt-1">R$</Text>
          <Text className="text-xl font-semibold text-red-500">{expenses}</Text>
        </View>
      </View>
    </MotiView>
  )
};

export default Balence;