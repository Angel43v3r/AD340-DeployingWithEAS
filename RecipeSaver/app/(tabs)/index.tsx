import { View, Text, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍳 Recipe Saver</Text>

      <Text style={styles.subtitle}>
        Save and explore your favorite recipes.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => router.push('/recipes')}
      >
        <Text style={styles.buttonText}>View Recipes</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#DBE3FB'
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#EAA0D0'
  },
  subtitle: {
    marginTop: 12,
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#EAA0D0',
    padding: 16,
    borderRadius: 12,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});