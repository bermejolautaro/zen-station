import { Component } from '@angular/core';

type DescripcionId =
  | 'default'
  | 'descansapies';

export interface Producto {
  imgSrc: string;
  imgAlt: string;
  titulo: string;
  descripcionId: DescripcionId;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private defaultSrc = 'https://via.placeholder.com/350';

  public productos: Producto[] = [
    {
      imgSrc: this.defaultSrc,
      imgAlt: '',
      titulo: 'Descansapies',
      descripcionId: 'descansapies'
    },
    {
      imgSrc: this.defaultSrc,
      imgAlt: '',
      titulo: 'Titulo',
      descripcionId: 'default'
    },
    {
      imgSrc: this.defaultSrc,
      imgAlt: '',
      titulo: 'Titulo',
      descripcionId: 'default'
    }
  ];
}
