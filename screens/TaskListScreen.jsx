// screens/TaskListScreen.jsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

export default function TaskListScreen({ navigation }) {
  const appTitle = 'Mis Tareas';

  // Estado local de tareas
  const [tasks, setTasks] = useState([
    // { id: 1, title: 'Comprar leche', completed: false },
    { id: 2, title: 'Enviar email', completed: true },
    { id: 3, title: 'Leer documentación', completed: false },
  ]);

  // Función que recibirá la nueva tarea
  const addTask = (task) => {
    setTasks(prevTasks => [...prevTasks, task]);
  };

  const totalTasks   = tasks.length;
  const pendingTasks = tasks.filter(t => !t.completed).length;


  if (totalTasks === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>No hay tareas disponibles</Text>
        <Button
          title="Crear nueva tarea"
          onPress={() => navigation.navigate('AddTask', { addTask })}
        />
      </View>
    )
  } else if (totalTasks < 3) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Solo tienes unas pocas tareas ({totalTasks})</Text>
      <Button
        title="Crear nueva tarea"
        onPress={() => navigation.navigate('AddTask', { addTask })}
      />
      </View>
    )
  }

  return (
    <View style={styles.container}>
        <Text style={styles.header}>
          {appTitle} ({totalTasks})
        </Text>
        <Text style={styles.subheader}>
          Pendientes: {pendingTasks}
        </Text>

        {/* Lista desplazable de tareas */}
        <ScrollView style={styles.list}>
          {tasks.map(task => (
            <Text key={task.id} style={styles.taskItem}>
              {task.title} {task.completed ? '✅' : '⌛️'}
            </Text>
          ))}
        </ScrollView>

        {/* Botón para ir al formulario, pasando addTask */}
        <Button
          title="Crear nueva tarea"
          onPress={() => navigation.navigate('AddTask', { addTask })}
        />
      </View>
  );
}


const styles = StyleSheet.create({
  container:  { flex: 1, padding: 16, backgroundColor: '#fff' },
  header:     { fontSize: 22, fontWeight: 'bold', marginBottom: 4 },
  subheader:  { fontSize: 16, marginBottom: 12 },
  list:       { flex: 1, marginBottom: 12 },
  taskItem:   { fontSize: 14, paddingVertical: 4 },
  message:   { fontSize: 18, marginBottom: 12 },
});

// holi
