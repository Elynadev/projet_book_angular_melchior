import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  getChildInfo!:boolean;
 recupValue(val:boolean){
 this.getChildInfo=val;
 }
}
