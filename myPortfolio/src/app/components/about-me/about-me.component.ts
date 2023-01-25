import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {

  constructor( private datosPortfolio: PortfolioService ) {}
    personalInfo: any;

    ngOnInit(): void {
      this.datosPortfolio.obtenerDatos().subscribe( data => {
        this.personalInfo = data.about;
      } ) ;
    }

}
