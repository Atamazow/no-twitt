import { Component, OnInit } from '@angular/core';
import { StoreTodosService } from '../store-todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private storeTodos: StoreTodosService) {
  }
  getItems() {
    return this.storeTodos.getItems();
  }
  toggleLike(id) {
    this.storeTodos.toggleLike(id);
  }

  onlyLikes() {
    this.storeTodos.onlyLikes();
  }

  all() {
    this.storeTodos.all();
  }

  ngOnInit(): void {
  }
}
