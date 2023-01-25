import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor( private datosPortfolio: PortfolioService ) {}
    myPortfolio: any;

    ngOnInit(): void {
      this.datosPortfolio.obtenerDatos().subscribe( data => {
        
        this.myPortfolio = data;
      } ) ;
    }
}
