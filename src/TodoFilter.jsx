import React, { useState } from "react";
import './App.css'

const initialTasks = [
  {
    id: 1,
    title: "Задача 1",
    description: "Испраивить форму регистрации",
    created: "2021-09-01",
  },
  {
    id: 2,
    title: "Задача 2",
    description: "Положение аватара",
    created: "2021-09-02",
  },
  {
    id: 3,
    title: "Задача 3",
    description: "Алгоритм проверки из списка",
    created: "2021-09-03",
  },
];

const TodoFilter = () => {
  const [elements, setElements] = useState(initialTasks);
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredElements = elements.filter((element) =>
    element.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Фильтрация списка элементов</h1>
      <div>
        Фильтр:
        <input type="text" value={filter} onChange={handleFilterChange} />
      </div>
      <ul className="ulList">
        {filteredElements.map((element) => (
          <li className='liList' key={element.id}>
            <h3>{element.title}</h3>
            <p>{element.description}</p>
            <p>{element.created}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoFilter;