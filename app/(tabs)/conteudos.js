import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../src/constants/colors";
import { getData } from "../../src/services/storage";

export default function Historico() {
  const [history, setHistory] = useState([]);

  async function load() {
    const data = await getData("checkin_history");
    setHistory(data || []);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico emocional</Text>

      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.mood}>{item.mood}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Nenhum registro ainda.</Text>
        }
      />
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
    fontWeight: "700",
    marginBottom: 15,
    color: Colors.text,
  },
  card: {
    backgroundColor: Colors.card,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  date: {
    fontSize: 12,
    color: "#777",
  },
  mood: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: "600",
  },
  empty: {
    marginTop: 20,
    color: "#777",
  },
});
