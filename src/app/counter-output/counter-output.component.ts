import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { selectCount, selectDoubleCount } from '../store/counter.selectors';
import { selectAddSubstring, selectReducedString } from '../store/string.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
  imports: [AsyncPipe]
})
export class CounterOutputComponent {
  count$: Observable<number>;
  doubleCount$: Observable<number>;
  reducedString$: Observable<string>
  addSubstring$: Observable<string>

  constructor(private store: Store<{ counter: number, changeString: string, addSubstring: string }>) {
    this.count$ = store.select(selectCount);
    this.doubleCount$ = store.select(selectDoubleCount);
    this.reducedString$ = store.select(selectReducedString);
    this.addSubstring$ = store.select(selectAddSubstring)
  }
}
