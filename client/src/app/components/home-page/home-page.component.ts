import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadMentors } from 'src/app/store/home-page/homePageAction';
import { HomePageState } from 'src/app/store/home-page/homePageReducer';
import { Mentor } from 'src/interfaces/mentor';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  mentors$: Observable<Mentor[]>;

  constructor(private store: Store<{homePageReducer: HomePageState}>) {
    this.mentors$ = this.store.select((state) => {    
      return state.homePageReducer.mentors;
    })
  }

  ngOnInit() {
    this.store.dispatch(loadMentors());
  }
}
