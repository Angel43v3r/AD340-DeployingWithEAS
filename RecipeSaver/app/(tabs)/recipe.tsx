import { Alert, Pressable, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RecipeDetailsScreen() {
  const { id, name, ingredients, directions } =
    useLocalSearchParams();

  const deleteRecipe = async () => {
    Alert.alert(
      'Delete Recipe',
      `Are you sure you want to delete "${name}"?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              const data =
                await AsyncStorage.getItem('recipes');

              const recipes = data
                ? JSON.parse(data)
                : [];

              const updatedRecipes = recipes.filter(
                (recipe) => recipe.id !== id
              );

              await AsyncStorage.setItem(
                'recipes',
                JSON.stringify(updatedRecipes)
              );

              router.back();
            } catch (error) {
              console.log(error);
              Alert.alert(
                'Error',
                'Failed to delete recipe.'
              );
            }
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{name}</Text>

      <Text style={styles.heading}>
        Ingredients
      </Text>

      <Text style={styles.content}>
        {ingredients}
      </Text>

      <Text style={styles.heading}>
        Directions
      </Text>

      <Text style={styles.content}>
        {directions}
      </Text>

      <Pressable
        style={styles.deleteButton}
        onPress={deleteRecipe}
      >
        <Text style={styles.deleteButtonText}>
          Delete Recipe
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#DBE3FB',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#EAA0D0',
  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },

  content: {
    fontSize: 16,
    lineHeight: 24,
  },

  deleteButton: {
    marginTop: 30,
    backgroundColor: '#EAA0D0',
    padding: 16,
    borderRadius: 12,
    marginBottom: 30,
  },

  deleteButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});