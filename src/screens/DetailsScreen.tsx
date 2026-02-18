import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { increment, decrement, reset } from '../store/slices/counterSlice';

type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;

type Props = {
  navigation: DetailsScreenNavigationProp;
};

export function DetailsScreen({ navigation }: Props) {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>상세 화면</Text>
      <Text style={styles.description}>
        React Navigation + Redux가 적용되었습니다.
      </Text>

      <View style={styles.counterBox}>
        <Text style={styles.counterLabel}>Redux 카운터</Text>
        <Text style={styles.counterValue}>{count}</Text>
        <View style={styles.counterRow}>
          <TouchableOpacity
            style={[styles.counterBtn, styles.counterBtnMinus]}
            onPress={() => dispatch(decrement())}
          >
            <Text style={styles.counterBtnText}>−</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.counterBtn, styles.counterBtnPlus]}
            onPress={() => dispatch(increment())}
          >
            <Text style={styles.counterBtnText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.resetBtn}
          onPress={() => dispatch(reset())}
        >
          <Text style={styles.buttonText}>초기화</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>뒤로 가기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
    textAlign: 'center',
  },
  counterBox: {
    marginBottom: 24,
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    alignItems: 'center',
    minWidth: 200,
  },
  counterLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  counterValue: {
    fontSize: 36,
    fontWeight: '700',
    marginBottom: 16,
  },
  counterRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  counterBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterBtnMinus: {
    backgroundColor: '#e74c3c',
  },
  counterBtnPlus: {
    backgroundColor: '#27ae60',
  },
  counterBtnText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
  resetBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#95a5a6',
    borderRadius: 8,
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: '#0a7ea4',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
