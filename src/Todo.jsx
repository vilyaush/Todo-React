import React, { useState } from "react";

const initialTasks = [
  {
    id: 1,
    title: "Задача 1",
    description: "Испраивить форму регистрации",
    created: "2021-09-01",
    completed: false,
  },
  {
    id: 2,
    title: "Задача 2",
    description: "Положение аватара",
    created: "2021-09-02",
    completed: false,
  },
  {
    id: 3,
    title: "Задача 3",
    description: "Алгоритм проверки из списка",
    created: "2021-09-03",
    completed: true,
  },
];

const Todo = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [editingTask, setEditingTask] = useState(null);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    created: "",
    completed: false,
  });

  const handleInputChange = (event) => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  const addTask = () => {
    const newId = tasks.length + 1;

    setTasks([...tasks, { ...newTask, id: newId }]);
    
    setNewTask({
      title: "",
      description: "",
      created: "",
      completed: false,
    });
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const editTask = (task) => {
    setEditingTask(task);
    setNewTask(task);
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const saveTask = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === editingTask.id ? newTask : task
    );
    setTasks(updatedTasks);
    setEditingTask(null);
    setNewTask({
      title: "",
      description: "",
      created: "",
      completed: false,
    });
  };

  return (
    <div className="App-header">
      <h1>Список задач</h1>
      <table>
        <thead>
          <tr>
            <th>Название</th>
            <th>Описание</th>
            <th>Дата создания</th>
            <th>Статус</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.created}</td>
              <td>{task.completed ? "Выполнена" : "Не выполнена"}</td>
              <td>
                <button onClick={() => editTask(task)}>Редактировать</button>
                <button onClick={() => deleteTask(task.id)}>Удалить</button>
                {!task.completed && (
                  <button onClick={() => toggleTaskCompletion(task.id)}>
                  {task.completed ? 'Отменить' : 'Выполнить'}
                </button>
                )}
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <input
                type="text"
                name="title"
                value={newTask.title}
                onChange={handleInputChange}
                required
              />
            </td>
            <td>
              <input
                type="text"
                name="description"
                value={newTask.description}
                onChange={handleInputChange}
                required
              />
            </td>
            <td>
              <input
                type="date"
                name="created"
                value={newTask.created}
                onChange={handleInputChange}
                required
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="completed"
                checked={newTask.completed}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <button onClick={addTask}>Добавить</button>
              {editingTask && (
                <button onClick={saveTask}>Сохранить</button>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Todo;