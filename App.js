import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const App = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (name && lastName) {
      const newTask = `Nome da atividade ${name}:\nDescrição da atividade:${lastName}`;
      setTasks([...tasks, newTask]);
      setName("");
      setLastName("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.task}>
      <Text style={styles.itemList}>{item}</Text>
      <TouchableOpacity onPress={() => handleDeleteTask(index)}>
        <Text style={styles.deleteButton}>Apagar Tarefa</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Registro de Afazeres</Text>
      <Text style={styles.title}>Adicione e veja suas afazeres!</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="atividade"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Descricao"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.addButtonText}>Registrar Atividade</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: "40px" }}>Afazeres</Text>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 7,
    color: "green",
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 10,
  },
  input: {
    marginTop: "10px",
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 3,
    padding: 10,
    borderRadius: 20,
    borderColor: "green",
  },
  addButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  task: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    fontSize: 18,
    backgroundColor: "#CEFFA8",
    borderRadius: 12,
    padding: 20,
  },
  itemList: {
    fontSize: 19,
  },
  deleteButton: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default App;
