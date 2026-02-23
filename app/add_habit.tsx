import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

const AddHabit = () => {
  const [habitName, setHabitName] = useState("");
  const [habitDescription, setHabitDescription] = useState("");
  const [frequency, setFrequency] = useState("");

  const handleSubmit = () => {
    if (habitName === "" || habitDescription === "") {
      alert("Please fill in all fields");
      return;
    }
    const habit = { habitName, habitDescription };
    console.log(habit);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.text}>Add Your Habit</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter habit name"
            value={habitName}
            onChangeText={setHabitName}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter habit description"
            value={habitDescription}
            onChangeText={setHabitDescription}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your goal days"
            value={frequency}
            onChangeText={setFrequency}
            autoCapitalize="none"
            keyboardType="numeric"
            maxLength={5}
          />
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() => {
              setHabitName("");
              setHabitDescription("");
              setFrequency("");
            }}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddHabit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  form: {
    marginTop: 20,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#5faafaff",
    padding: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#5faafaff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginTop: "3%",
    marginBottom: "3%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
