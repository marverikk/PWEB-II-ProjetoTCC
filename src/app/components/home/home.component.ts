import { Component } from '@angular/core';

@Component({
  selector: 'app- card-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

   nomeProduto: string = "ALTA";
   anuncio: string = `Todos empregos então com ${this.nomeProduto} empregabilidade!`;
   idProduto: number = 3.;
   precoProduto: number = 0.00;
   promocao: boolean = false;
   foto:string = 'assets/img/crud.png'

    constructor()
    {
    }

}
