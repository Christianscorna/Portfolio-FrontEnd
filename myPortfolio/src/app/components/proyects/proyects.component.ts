import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})

export class ProyectsComponent {

  constructor( private datosPortfolio: PortfolioService ) {}
    proyectList: any;

    ngOnInit(): void {
      this.datosPortfolio.obtenerDatos().subscribe( data => {
        this.proyectList = data.proyects;
      } ) ;
    }

}
