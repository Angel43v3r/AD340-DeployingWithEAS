import { useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
} from 'react-native';
import { router } from 'expo-router';

export default function CreateRecipeScreen() {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [directions, setDirections] = useState('');

  const saveRecipe = () => {
    if (!name.trim()) {
      Alert.alert(
        'Missing Recipe Name',
        'Please enter a recipe name.'
      );
      return;
    }

    Alert.alert(
      'Recipe Saved',
      `${name} was saved successfully!`
    );

    router.back();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Recipe Name</Text>

      <TextInput
        style={styles.input}
        placeholder="Chicken Alfredo"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Ingredients</Text>

      <TextInput
        style={styles.largeInput}
        multiline
        value={ingredients}
        onChangeText={setIngredients}
        placeholder={`2 Chicken Breasts
1 Cup Cream
Parmesan Cheese`}
      />

      <Text style={styles.label}>Directions</Text>

      <TextInput
        style={styles.largeInput}
        multiline
        value={directions}
        onChangeText={setDirections}
        placeholder={`1. Cook chicken
2. Make sauce
3. Combine ingredients
4. Serve`}
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
    borderColor: '#2D5F8',
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