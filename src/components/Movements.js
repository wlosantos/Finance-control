import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Movements = ({ data }) => {
  const [showValue, setShowValue] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={ 0.5 }
      className="flex-1 mb-2 mt-2 border-b border-gray-200 pb-4"
      onPress={ () => setShowValue(!showValue) }
    >
      <View className="">
        <Text className="text-gray-300 font-bold">{data.date}</Text>
        <View className="container flex-row items-center justify-between mt-2">
          <Text className="font-semibold text-base">{data.label}</Text>
          {showValue ? (
            <Text className={`font-semibold text-base ${data.type == 'expense' ? 'text-red-500' : 'text-green-500'}`}>
              R$ { data.value }
            </Text>
          ) : (
            <View className="w-16 h-2 bg-gray-300 rounded-full"></View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  )
};

export default Movements;

const styles = StyleSheet.create({
  balance: {
    color: ""
  }
})