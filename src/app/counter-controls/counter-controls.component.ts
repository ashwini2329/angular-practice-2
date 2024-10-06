import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement } from '../store/counter.actions';
import { removeVowels, addSubstring } from '../store/string.actions';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
  standalone: true,
})
export class CounterControlsComponent {
  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(increment({value: 2}))
  }

  decrement() {
    this.store.dispatch(decrement({value: 2}))
  }

  removeVowels() {
    this.store.dispatch(removeVowels({value: 'Hello Angular'}))
  }

  addSubstring() {
    this.store.dispatch(addSubstring({value: ' Tech Stack'}))
  }
}
