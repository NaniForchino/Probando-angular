import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor() { }

  // title = "Titulo del h1";
  // subtitle = "Subtitulo del h1"

  @Input() title = "Hola";
  @Input() subtitle?: string;

  // lo dos puntos : asigna tipo, el igual = asigna valor
  // O se le da un valor predeterminado, o se le indica que es opcional
  // El ? indica que el valor es opcional

  ngOnInit(): void {
  }

}
