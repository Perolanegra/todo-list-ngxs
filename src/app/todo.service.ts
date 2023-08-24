import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './models/Todo';
import { environment } from 'src/environments/environment';
import * as nanoid from 'nanoid';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  private _baseUrl: string;

  constructor(private http: HttpClient) {
    this._baseUrl = environment.API_URL;
  }

  fetchTodos() {
    return of([{
      userId: 14,
      id: 12,
      title: 'eu',
      completed: true
    }])
  }

  deleteTodo(id: number) {
    return this.http.delete(`${this._baseUrl}/${id}`);
  }

  addTodo(payload: Todo) {
    payload.id = nanoid(12);
    return this.http.post<Todo>(`${this._baseUrl}/todos`, payload);
  }

  updateTodo(payload: Todo, id: number) {
    return this.http.put<Todo>(`${this._baseUrl}/todos/${id}`, payload);
  }
}
