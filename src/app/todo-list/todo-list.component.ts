import { Component, OnInit } from '@angular/core';

interface TodoItem {
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todoList: TodoItem[] = [];
  filteredTodoList: TodoItem[] = [];
  newTodoDescription: string = '';
  newTodoStatus: boolean = false;
  selectedFilter: string = 'all';

  ngOnInit() {
    // Fetch initial todo list data from an API or other sources if needed
    // For this example, we'll initialize with some dummy data
    this.todoList = [
      { description: 'Task 1', completed: false },
      { description: 'Task 2', completed: true },
      { description: 'Task 3', completed: false },
    ];

    this.filterTodoItems();
  }

  addTodoItem() {
    // Create a new todo item based on user input
    const newTodoItem: TodoItem = {
      description: this.newTodoDescription,
      completed: this.newTodoStatus,
    };

    // Add the new todo item to the list
    this.todoList.push(newTodoItem);

    // Clear the input fields
    this.newTodoDescription = '';
    this.newTodoStatus = false;

    // Update the filtered list based on the selected filter
    this.filterTodoItems();
  }

  deleteTodoItem(todo: TodoItem) {
    // Find the index of the todo item in the list
    const index = this.todoList.indexOf(todo);

    // If the item is found, remove it from the list
    if (index !== -1) {
      this.todoList.splice(index, 1);
    }

    // Update the filtered list based on the selected filter
    this.filterTodoItems();
  }

  filterTodoItems() {
    switch (this.selectedFilter) {
      case 'completed':
        this.filteredTodoList = this.todoList.filter(todo => todo.completed);
        break;
      case 'incomplete':
        this.filteredTodoList = this.todoList.filter(todo => !todo.completed);
        break;
      default:
        this.filteredTodoList = this.todoList;
        break;
    }
  }
}


