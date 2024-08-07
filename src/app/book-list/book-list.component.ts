import { Component , OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BookInterface } from '../book-interface';
import { ServicebookService } from '../servicebook.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
// name:string="bravo";
// Books=[
// {
//   id:1 , title:"zéro burg", auteur:"cap hamsome" ,statut: "non lu" , annee:"1285"
// },
// {
//   id:2 , title:"Angular vivant", auteur:"lorie camper" ,statut:"lu", annee:"1285"
// },
// {
//   id:3 , title:"le code pour des nuls", auteur:"tweet samsom" ,statut: "non lu",  annee:"1285"
// }

books?:BookInterface[];

constructor(private BookService:ServicebookService){};

ngOnInit():void
{
  this.books = this.BookService.getBooks();
}


}

