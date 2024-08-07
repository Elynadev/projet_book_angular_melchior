import { Injectable } from '@angular/core';
import { BookInterface } from './book-interface';
import { Books } from '../mock-books';

@Injectable({
  providedIn: 'root'
})
export class ServicebookService {

  constructor() { }
 books:BookInterface[]=Books;

  getBooks():BookInterface[]{
    return this.books
  }
}
