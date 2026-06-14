import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
} from 'react-native';
import { router } from 'expo-router';

const recipes = [
  {
    id: '1',
    name: 'Spaghetti',
    ingredients:
      'Pasta\nTomato Sauce\nParmesan Cheese',
    directions:
      '1. Boil pasta\n2. Heat sauce\n3. Mix together\n4. Serve',
  },
  {
    id: '2',
    name: 'Chicken Salad',
    ingredients:
      'Chicken Breast\nLettuce\nTomatoes\nDressing',
    directions:
      '1. Grill chicken\n2. Chop vegetables\n3. Mix ingredients\n4. Add dressing',
  },
];

export default function RecipesScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              router.push({
                pathname: '/recipe',
                params: {
                  name: item.name,
                  ingredients: item.ingredients,
                  directions: item.directions,
                },
              })
            }
          >
            <View style={styles.card}>
              <Text style={styles.recipeName}>
                {item.name}
              </Text>

              <Text style={styles.tapText}>
                Tap to view recipe
              </Text>
            </View>
          </Pressable>
        )}
      />

      <Pressable
        style={styles.button}
        onPress={() => router.push('/create')}
      >
        <Text style={styles.buttonText}>Add Recipe</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F8EBF5'
  },

  card: {
    backgroundColor: '#DBE3FB',
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#B2D5F8'
  },

  recipeName: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  tapText: {
    marginTop: 6,
    color: '#666',
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