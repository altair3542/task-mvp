import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TaskListScreen() {
  const appTitle = 'Mis Tareas';
  const tasks = [
    { id: 1, title: 'Comprar leche', completed: false },
    { id: 2, title: 'Enviar email', completed: true },
    { id: 3, title: 'Leer documentación', completed: false },
  ];

  // 1. Usamos let para variables que cambian
  let pendingTasks = tasks.filter(t => !t.completed).length;
  let completedTasks = tasks.length - pendingTasks;

  // 2. Logueamos sus valores
  console.log('Pendientes:', pendingTasks);
  console.log('Completadas:', completedTasks);

  // 3. Modificamos internamente un elemento de tasks
  tasks[1].title = 'Enviar reporte';
  console.log('Título modificado en tasks[1]:', tasks[1].title);
  // Nota: como la referencia `tasks` no cambió, React no detecta esto como un cambio para re-renderizar automáticamente.

  return (
    <View style={styles.container}>
      {/* Título con total dinámico */}
      <Text style={styles.header}>
        {appTitle} ({tasks.length})
      </Text>

      {/* Mostramos pendientes y completadas */}
      <Text style={styles.subheader}>
        Pendientes: {pendingTasks}
      </Text>
      <Text style={styles.subheader}>
        Completadas: {completedTasks}
      </Text>

      {/* Renderizado dinámico con map */}
      {tasks.map(task => (
        <Text key={task.id} style={styles.taskItem}>
          {task.title} {task.completed ? '✅' : '⌛️'}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
  subheader: { fontSize: 16, marginBottom: 4 },
  taskItem: { fontSize: 14, paddingVertical: 2 },
});
