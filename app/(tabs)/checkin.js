import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../src/constants/colors";
import { getData, saveData } from "../../src/services/storage";

const moods = [
  { label: "😊 Bem", value: "Bem" },
  { label: "😐 Neutro", value: "Neutro" },
  { label: "😔 Triste", value: "Triste" },
  { label: "😟 Ansioso", value: "Ansioso" },
];

export default function CheckIn() {
  const [selected, setSelected] = useState(null);

  async function handleSave() {
    const existing = await getData("checkin_history");
    const history = existing || [];

    const entry = {
      id: Date.now().toString(),
      mood: selected,
      date: new Date().toLocaleString(),
    };

    history.unshift(entry);

    await saveData("checkin_history", history);

    alert("Check-in registrado com sucesso!");
    setSelected(null);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Como você está se sentindo hoje?</Text>

      {moods.map((item) => (
        <Pressable
          key={item.value}
          style={[
            styles.button,
            selected === item.value && styles.selected,
          ]}
          onPress={() => setSelected(item.value)}
        >
          <Text style={styles.text}>{item.label}</Text>
        </Pressable>
      ))}

      {selected && (
        <Pressable style={styles.save} onPress={handleSave}>
          <Text style={styles.saveText}>Salvar</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 22,
    marginBottom: 25,
    fontWeight: "700",
    color: Colors.text,
  },
  button: {
    padding: 18,
    borderRadius: 12,
    backgroundColor: Colors.card,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  selected: {
    backgroundColor: Colors.secondary,
  },
  text: {
    fontSize: 16,
    color: Colors.text,
  },
  save: {
    marginTop: 25,
    backgroundColor: Colors.primary,
    padding: 18,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  saveText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
