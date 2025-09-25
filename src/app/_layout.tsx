import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="(shop)"
          options={{ headerShown: true, title: "Shop" }}
        />
      </Stack>
      <Stack>
        <Stack.Screen
          name="categories"
          options={{ headerShown: true, title: "Categories" }}
        />
      </Stack>
      <Stack>
        <Stack.Screen
          name="product"
          options={{ headerShown: true, title: "Product" }}
        />
      </Stack>
      <Stack>
        <Stack.Screen
          name="cart"
          options={{ presentation: "modal", title: "Shopping Cart" }}
        />
      </Stack>
      <Stack>
        <Stack.Screen name="auth" options={{ headerShown: true }} />
      </Stack>
    </>
  );
}
