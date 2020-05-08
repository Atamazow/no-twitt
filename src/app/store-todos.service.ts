import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreTodosService {

  items = [
    {
      id: 1,
      text: "hello everyone. How are you?",
      like: false,
      author: 'admin',
      img: 'https://intocode.ru/d/react-chat/avatars/admin.jpg'
    },
    {
      id: 2,
      text: "Как живется на карантине? Мне плохо",
      like: false,
      author: 'adam',
      img: 'https://intocode.ru/d/react-chat/avatars/adam.jpg'
    },
    {
      id: 3,
      text: "Эту домашку нужно выполнить во что бы то не стало!",
      like: false,
      author: 'admin',
      img: 'https://intocode.ru/d/react-chat/avatars/admin.jpg'
    },
    {
      id: 4,
      text: "Я так говорю о всех домашках",
      like: false,
      author: 'no-avatar',
      img: 'https://intocode.ru/d/react-chat/avatars/no-avatar.jpg'
    },
    { id: 5, text: "Но эта особенная...", like: false, author: 'adam', img: 'https://intocode.ru/d/react-chat/avatars/adam.jpg' }
  ];
  onlyLike = false;

  onlyLikes() {
    if (this.onlyLike === false) {
      this.onlyLike = true;
    }
  }
  all() {
    if (this.onlyLike === true) {
      this.onlyLike = false;
    }
  }


  toggleLike(id) {
    this.items = this.items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          like: !item.like
        };
      }
      return item;
    })
  }
  getItems() {
    let items;
    if (this.onlyLike) {
      items = this.items.filter(item => item.like);
    } else {
      items = this.items;
    }
    return items;
  }
  constructor() { }
}


