import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: 'Recipe Saver' }}
      />
      <Stack.Screen
        name="recipes"
        options={{ title: 'Recipes' }}
      />
      <Stack.Screen
        name="recipe"
        options={{ title: 'Recipe Details' }}
      />
      <Stack.Screen
        name="create"
        options={{ title: 'Create Recipe' }}
      />
    </Stack>
  );
}