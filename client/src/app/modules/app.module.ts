import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app.component';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { FoodDictionaryPageComponent } from '../components/food-dictionary-page/food-dictionary-page.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MentorsPageComponent } from '../components/mentors-page/mentors-page.component';
import { RecipesPageComponent } from '../components/recipes-page/recipes-page.component';
import { SignInComponent } from '../components/sign-in/sign-in.component';
import { HeroComponent } from '../components/hero/hero.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from '../components/nav-bar/nav-bar.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { OurMentorsComponent } from '../components/our-mentors/our-mentors.component';
import {MatCardModule} from '@angular/material/card';
import { MentorCardComponent } from '../components/mentor-card/mentor-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FoodDictionaryPageComponent,
    FooterComponent,
    MentorsPageComponent,
    RecipesPageComponent,
    SignInComponent,
    HeroComponent,
    NavbarComponent,
    AboutUsComponent,
    OurMentorsComponent,
    MentorCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
