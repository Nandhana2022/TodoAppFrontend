
// todo.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoItem } from './todo-item.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'https://localhost:7220';

  constructor(private http: HttpClient) { }

  getTodoList(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(`${this.apiUrl}/todos`);
  }

  addTodoItem(todo: TodoItem): Observable<TodoItem> {
    return this.http.post<TodoItem>(`${this.apiUrl}/todos`, todo);
  }

  updateTodoItem(todo: TodoItem): Observable<TodoItem> {
    return this.http.put<TodoItem>(`${this.apiUrl}/todos/${todo.id}`, todo);
  }

  deleteTodoItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/todos/${id}`);
  }
}
