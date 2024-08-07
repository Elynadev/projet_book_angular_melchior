import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-book-hearder',
  templateUrl: './book-hearder.component.html',
  styleUrl: './book-hearder.component.css'
})
export class BookHearderComponent {
  
  @Output() passValue = new EventEmitter<boolean>();
  affiche:boolean=false;
  onSave(){
    this.affiche=!this.affiche;
    this.passValue.emit(this.affiche);
    console.log("okki oool");

  }
 
  
}
