import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function RecipeDetailsScreen() {
  const { name, ingredients, directions } =
    useLocalSearchParams();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{name}</Text>

      <Text style={styles.heading}>Ingredients</Text>

      <Text style={styles.content}>
        {ingredients}
      </Text>

      <Text style={styles.heading}>Directions</Text>

      <Text style={styles.content}>
        {directions}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#DBE3FB'
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#EAA0D0'
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
});