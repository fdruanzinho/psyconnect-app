import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

export async function saveData(key, value) {
  const data = JSON.stringify(value);

  if (Platform.OS === "web") {
    localStorage.setItem(key, data);
  } else {
    await AsyncStorage.setItem(key, data);
  }
}

export async function getData(key) {
  if (Platform.OS === "web") {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } else {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
}
