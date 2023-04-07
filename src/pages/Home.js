import { View } from 'react-native';
import Header from '../components/Header';
import Balence from '../components/Balence';

export default () => {
  return (
    <View className="w-full">
      <Header name="Wendel Lopes" />
      <Balence balence={9756.82} expenses={-765.32} />
    </View>
  )
};
