# 🧑‍💼 Employee Manager App

A responsive Angular web application to manage employee data with full CRUD functionality using Bootstrap for UI styling and local storage for data persistence.

## 📌 Features

- 🔐 **Login Page**
  - Email and password fields with validation
  - Redirects to Home Page upon successful login
  - 


  🧠 Employee Service (Logic Description)
I created a reusable EmployeeService to manage all operations related to employee data using local storage. Here's a summary of what it does:

Initialization:
When the service is first constructed, it checks for any data in localStorage. If not, it initializes it with two default employees.

Get All Employees:
getEmployees() fetches the employee list from localStorage and parses it into an array.

Add Employee:
addEmployee() creates a new employee with a unique id (based on timestamp) and saves it to localStorage.

Update Employee:
updateEmployee() finds the employee by id, updates their data, and rewrites the entire array in localStorage.

Delete Employee:
deleteEmployee() filters out the employee with the given id and saves the updated list.

- **Home Page**
  - Displays all employees in a responsive table
  - Search bar to filter by name or email
  - CRUD Operations:
    - ✅ Add new employee
    - ✏️ Edit employee
    - ❌ Delete employee
  - Form validation for all inputs (email format, salary as a number, etc.)

- ✏️ **CRUD Operations**
  - **Create**: Add a new employee with a validated form
  - **Read**: View all employee data in a table
  - **Update**: Edit employee details with pre-filled form
  - **Delete**: Remove employee from the list

- 🔍 **Search Bar**
  - Real-time filtering by name or email
 
  - 
- **Routing**
  - Angular standalone components 

- **Storage**
  - Data is stored and updated using `localStorage`


## 🛠️ Technology Stack

- **Framework**: Angular 17
- **Styling**: Bootstrap 5
- **Data Storage**: Local Storage
- **Language**: TypeScript / HTML / CSS

This project is part of a frontend assessment task for Develop Network.  
All requirements, including CRUD functionality, search, validation, routing, and responsive UI have been implemented successfully.
