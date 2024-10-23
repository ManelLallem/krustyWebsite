import React, { useState, useEffect } from "react";
import axios from "axios";

const Shop = () => {
  const [employees, setEmployees] = useState([]);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    // Fetch Employees
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:7010/krustykrab/employees");
        console.log(response)
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    // Fetch Dishes
    const fetchDishes = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:7010/krustykrab/dishes");
        setDishes(response.data);
      } catch (error) {
        console.error("Error fetching dishes:", error);
      }
    };

    fetchEmployees();
    fetchDishes();
  }, []);

  return (
    <div>
      <h2>Employees</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee._id}>
            {employee.name} - {employee.position}
          </li>
        ))}
      </ul>

      <h2>Menu Items</h2>
      <ul>
        {dishes.map((dish) => (
          <li key={dish._id}>
            {dish.name} - ${dish.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
