import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RecipeData = {
  id: string;
  name: string;
  ingredients: string;
  directions: string;
};

export default function RecipesScreen() {
  const [recipes, setRecipes] = useState<RecipeData[]>([]);

  useFocusEffect(
  useCallback(() => {
    const loadRecipes = async () => {
      try {
        const data =
          await AsyncStorage.getItem('recipes');

        if (data) {
          setRecipes(JSON.parse(data));
        } else {
          setRecipes([]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    loadRecipes();
  }, [])
);

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
                  id: item.id,
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