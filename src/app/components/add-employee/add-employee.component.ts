import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent {
    addForm: FormGroup;

  constructor(private empService: EmployeeService,private fb: FormBuilder, private router: Router) {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      image: ['', Validators.required],
      salary: ['', [Validators.required, Validators.pattern(/^\d+$/)]]
    });
  }

onSubmit() {
  if (this.addForm.valid) {
    const newEmp = this.addForm.value;
    this.empService.addEmployee(newEmp);
    this.router.navigate(['/home']);
  }
}

}
