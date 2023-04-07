import { View, Text } from 'react-native';

const Balence = (props) => {
  const {balence, expenses} = props;
  return (
    <View className="bg-white px-4 mx-6 mt-[-16] rounded-xl flex-row justify-between shadow z-10">
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
    </View>
  )
};

export default Balence;