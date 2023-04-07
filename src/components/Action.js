import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Action = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      className="max-h-24 mb-4 mt-5 mx-4 space-x-6"
    >
      <TouchableOpacity className="items-center">
        <View className="w-16 h-16 items-center justify-center bg-gray-200 rounded-full">
          <AntDesign name="addfolder" size={24} color="black" />
        </View>
        <Text className="mt-1 font-semibold">Entradas</Text>
      </TouchableOpacity>

      <TouchableOpacity className="items-center">
        <View  className="w-16 h-16 items-center justify-center bg-gray-200 rounded-full">
          <AntDesign name="tagso" size={24} color="black" />
        </View>
        <Text className="mt-1 font-semibold">Compras</Text>
      </TouchableOpacity>

      <TouchableOpacity className="items-center">
        <View  className="w-16 h-16 items-center justify-center bg-gray-200 rounded-full">
          <AntDesign name="creditcard" size={24} color="black" />
        </View>
        <Text className="mt-1 font-semibold">Carteira</Text>
      </TouchableOpacity>

      <TouchableOpacity className="items-center">
        <View  className="w-16 h-16 items-center justify-center bg-gray-200 rounded-full">
          <AntDesign name="barcode" size={24} color="black" />
        </View>
        <Text className="mt-1 font-semibold">Boletos</Text>
      </TouchableOpacity>

      <TouchableOpacity className="items-center">
        <View  className="w-16 h-16 items-center justify-center bg-gray-200 rounded-full">
          <AntDesign name="setting" size={24} color="black" />
        </View>
        <Text className="mt-1 font-semibold">Conta</Text>
      </TouchableOpacity>

      <TouchableOpacity className="items-center">
        <View  className="w-16 h-16 items-center justify-center bg-gray-200 rounded-full">
          <AntDesign name="check" size={24} color="black" />
        </View>
        <Text className="mt-1 font-semibold">Investimentos</Text>
      </TouchableOpacity>
    </ScrollView>
  )
};

export default Action;