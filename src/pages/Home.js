import { Text, View, FlatList } from 'react-native';
import Header from '../components/Header';
import Balence from '../components/Balence';
import Movements from '../components/Movements';
import Action from '../components/Action';

const list = [
  {
    id: 1,
    label: 'Conta de Luz',
    value: -150.32,
    date: '16/04/2023',
    type: 'expense',
  },
  {
    id: 2,
    label: 'Salário',
    value: 1800.72,
    date: '07/04/2023',
    type: 'deposit',
  }
]

export default () => {
  return (
    <View className="w-full">
      <Header name="W3n Bank" />
      <Balence balence={9756.82} expenses={-765.32} />

      <Action />
      <Text className="text-xl font-bold px-4 mt-4">Últimas Movimentações</Text>

      <FlatList
        className="p-4"
        data={list}
        keyExtractor={ item => String(item.id) }
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} /> }
      />
    </View>
  )
};
