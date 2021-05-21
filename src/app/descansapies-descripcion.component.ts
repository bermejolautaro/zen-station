import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-descansapies-descripcion',
  template: `
    Es una plataforma en madera. Consta de 2 niveles de elevacion favoreciendo
    mayor comodidad y funcionalidad. Sus medidas son de 40cmx40cm, ideal para
    tal proposito. Revestida de piedra de rio, es un descansapies unico/original
    como se puede apreciar. Su peso, si bien es importante, aproximado 5kg no es algo
    que trasladaras pero tampoco algo imposible de transportar. Cerrado o abierto es
    parte decorativo del ambiente. Donde sea colocado su presencia marca estilo.
    <br>
    <br>
    Ventajas: Para las personas que pasamos varias horas frente al monitor, nos ayuda a
    relajar, y las piedra nos brinda sensacion de bienestar provocando un delicado
    automasaje podal, favorece la circulacion sanguinea, el descanso y la postura alivia
    las tensiones y el estrés (un mimo a la planta de nuestros pies). El placer y la comodidad
    siempre nos ayuda a mejorar nuestra calidad de vida.
  `
})
export class DescansapiesDescripcionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
