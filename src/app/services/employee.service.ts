import { Injectable } from '@angular/core';
export interface Employee {
  id: number;
  name: string;
  email: string;
  image: string;
  salary: number;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private localStorageKey = 'employees';
  private employees: Employee[] = [
    {
      id: 1,
      name: 'Aya Jaafar',
      email: 'aya@example.com',
      image: 'https://avatar.iran.liara.run/public',
      salary: 5000
    },
    {
      id: 2,
      name: 'Ali Ahmed',
      email: 'ali@example.com',
      image: 'https://avatar.iran.liara.run/public',
      salary: 6000
    }
  ];

    constructor() {
    const data = localStorage.getItem(this.localStorageKey);
    if (!data) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(this.employees));
    }
  }

  getEmployees(): Employee[] {
    const data = localStorage.getItem(this.localStorageKey);
    return data ? JSON.parse(data) : [];
  }

addEmployee(newEmp: Employee) {
  const current = this.getEmployees();
  newEmp.id = Date.now();
  current.push(newEmp);
  localStorage.setItem(this.localStorageKey, JSON.stringify(current));
}
updateEmployee(updated: Employee) {
  const list = this.getEmployees()
                   .map(e => e.id === updated.id ? updated : e);
  localStorage.setItem(this.localStorageKey, JSON.stringify(list));
}

deleteEmployee(id: number) {
  const current = this.getEmployees();
  const updated = current.filter(emp => emp.id !== id);
  localStorage.setItem(this.localStorageKey, JSON.stringify(updated));
}




}



