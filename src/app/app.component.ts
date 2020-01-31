import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  
  product = '';


  constructor(){}

  ngOnInit(){
    // Actualizar la variable 'product' con la respuesta del servicio 'Mercadona'
  }

}
