import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee, EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.scss'
})
export class EditEmployeeComponent implements OnInit {
  editForm!: FormGroup;
  empId!: number;
  empData!: Employee | undefined;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private empService: EmployeeService
  ) {}

  ngOnInit(): void {

    this.empId = Number(this.route.snapshot.paramMap.get('id'));
    this.empData = this.empService.getEmployees().find(emp => emp.id === this.empId);

    if (this.empData) {
      this.editForm = this.fb.group({
        name: [this.empData.name, Validators.required],
        email: [this.empData.email, [Validators.required, Validators.email]],
        image: [this.empData.image, Validators.required],
        salary: [this.empData.salary, [Validators.required, Validators.pattern(/^\d+$/)]]
      });
    }
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      const updated: Employee = {
        id: this.empId,
        name: this.editForm.value.name,
        email: this.editForm.value.email,
        image: this.editForm.value.image,
        salary: +this.editForm.value.salary
      };


      this.empService.updateEmployee(updated);
      this.router.navigate(['/home']);
    }
  }
}

