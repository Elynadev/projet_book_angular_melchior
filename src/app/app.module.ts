import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { BookHearderComponent } from './book-hearder/book-hearder.component';
import { BookFooterComponent } from './book-footer/book-footer.component';
import { BookFormComponent } from './book-form/book-form.component';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookComponent,
    BookHearderComponent,
    BookFooterComponent,
    BookFormComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
