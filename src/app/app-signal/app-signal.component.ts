import { Component, computed, signal } from '@angular/core';
import { TaskModel } from './models/task-model';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-app-signal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app-signal.component.html',
  styleUrl: './app-signal.component.scss',
})
export class AppSignalComponent {
  taskList = signal<TaskModel[]>([
    { id: 1, description: 'new task', completed: false },
  ]);
  filter = signal('all');
  taskForm;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      id: [''],
      description: [''],
      completed: [false],
    });
  }

  filterTask() {
    computed(() => {
      switch (this.filter()) {
        case 'incomplete':
          return this.taskList().filter((task: TaskModel) => task.completed);
        case 'completed':
          return this.taskList().filter((task: TaskModel) => task.completed);
        default:
          return this.taskList();
      }
    });
  }
  addTask() {
    const newTask: TaskModel = {
      id: Number(this.taskForm.value.id),
      description: this.taskForm.value.description || '',
      completed: this.taskForm.value.completed || false,
    };
    this.taskList().push(newTask);
  }
}
