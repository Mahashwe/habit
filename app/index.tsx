import { Text, View, StyleSheet, Button, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useHabits } from "@/context/habits";

export default function App() {
  const { habits } = useHabits();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Track Your Habits</Text>
      <Text style={styles.text2}>
        "Motivation is what gets you started. Habit is what keeps you going."
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => router.push("/add_habit")}
      >
        <Text style={styles.buttonText}>+ Add Habit</Text>
      </Pressable>
      <View style={styles.box}>
        {habits.length === 0 ? (
          <Text style={styles.habitText}>
            No habits added yet. Start tracking!
          </Text>
        ) : (
          habits.map((habit) => (
            <View key={habit.id} style={{ marginBottom: 15 }}>
              <Text style={[styles.habitText, { fontWeight: "bold" }]}>
                {habit.habitName}
              </Text>
              <Text style={styles.habitText}>{habit.habitDescription}</Text>
              <Text style={styles.habitText}>
                Goal: {habit.frequency} day{habit.frequency > 1 ? "s" : ""}
              </Text>
            </View>
          ))
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginLeft: "2%",
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#5faafaff",
    borderRadius: 5,
    marginRight: 250,
    marginLeft: "1%",
    alignItems: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 16,
    marginTop: 15,
    marginBottom: 10,
    marginLeft: "8%",
    marginRight: "8%",
    fontStyle: "italic",
    fontFamily: "Arial",
    color: "#f86d36ff",
    backgroundColor: "#fceae9ff",
    padding: 10,
    borderRadius: 10,
  },
  box: {
    marginTop: 20,
    marginLeft: "8%",
    marginRight: "50%",
    padding: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 15,
    backgroundColor: "#f9f9f9ff",
  },
  habitText: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
  },
});
