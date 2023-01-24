import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent {

  constructor( private datosPortfolio: PortfolioService ) {}
    educationList: any;

    ngOnInit(): void {
      this.datosPortfolio.obtenerDatos().subscribe( data => {
        console.log( data );
        this.educationList = data.education;
      } ) ;
    }

}
