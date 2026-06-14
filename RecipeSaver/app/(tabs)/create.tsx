import { useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CreateRecipeScreen() {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [directions, setDirections] = useState('');

  const saveRecipe = async () => {
    if (!name.trim()) {
      Alert.alert(
        'Missing Recipe Name',
        'Please enter a recipe name.'
      );
      return;
    }

    try {
      const existingRecipes =
        await AsyncStorage.getItem('recipes');

      const recipes = existingRecipes
        ? JSON.parse(existingRecipes)
        : [];

      const newRecipe = {
        id: Date.now().toString(),
        name,
        ingredients,
        directions,
      };

      recipes.push(newRecipe);

      await AsyncStorage.setItem(
        'recipes',
        JSON.stringify(recipes)
      );

      Alert.alert(
        'Recipe Saved',
        `${name} was saved successfully!`
      );

      router.back();
    } catch (error) {
      Alert.alert('Error', 'Failed to save recipe.');
      console.error(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Recipe Name</Text>

      <TextInput
        style={styles.input}
        placeholder="Example: Chicken Alfredo"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Ingredients</Text>

      <TextInput
        style={styles.largeInput}
        multiline
        value={ingredients}
        onChangeText={setIngredients}
        placeholder={`Example: 2 Chicken Breasts
                  1 cup Heavy Cream
                  Parmesan Cheese
                  Garlic`}
      />

      <Text style={styles.label}>Directions</Text>

      <TextInput
        style={styles.largeInput}
        multiline
        value={directions}
        onChangeText={setDirections}
        placeholder={`Example: 1. Fry the Garlic
                  2. chicken
                  3. Make sauce
                  4. Combine ingredients
                  5. Serve`}
      />

      <Pressable
        style={styles.button}
        onPress={saveRecipe}
      >
        <Text style={styles.buttonText}>
          Save Recipe
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#DBE3FB',
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 12,
  },

  input: {
    borderWidth: 1,
    borderColor: '#82D5F8',
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#fff',
  },

  largeInput: {
    borderWidth: 1,
    borderColor: '#82D5F8',
    borderRadius: 10,
    padding: 12,
    minHeight: 140,
    textAlignVertical: 'top',
    backgroundColor: '#fff',
  },

  button: {
    backgroundColor: '#EAA0D0',
    padding: 16,
    borderRadius: 12,
    marginTop: 24,
  },

  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});