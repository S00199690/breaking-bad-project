import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BreakingBadApiService } from './services/breaking-bad-api.service';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { ReviewlistComponent } from './reviewlist/reviewlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
