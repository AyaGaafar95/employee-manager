import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  employees:Employee[]=[];
  searchTerm: string = '';

  constructor(private empService: EmployeeService,private router: Router) {
  }
  ngOnInit(): void {
   this.loadEmployees();
  }

 loadEmployees() {
    this.employees = this.empService.getEmployees();
  }

goToAdd() {
  this.router.navigate(['/add']);
}
goToEdit(id: number) {
  console.log('Editing ID:', id); 
  this.router.navigate(['/edit', id]);
}

delete(id: number) {
  const confirmDelete = window.confirm('Are you sure you want to delete this employee?');

  if (confirmDelete) {
    this.empService.deleteEmployee(id);
    this.loadEmployees();
  }
}


filteredEmployees(): Employee[] {
  if (!this.searchTerm.trim()) {
    return this.employees;
  }

  const term = this.searchTerm.toLowerCase().trim();
  return this.employees.filter(emp =>
    emp.name.toLowerCase().includes(term) ||
    emp.email.toLowerCase().includes(term)
  );
}


}
