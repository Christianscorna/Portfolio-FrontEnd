import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {

  constructor( private datosPortfolio: PortfolioService ) {}
    contactList: any;

    ngOnInit(): void {
      this.datosPortfolio.obtenerDatos().subscribe( data => {
        this.contactList = data.contact;
      } ) ;
    }


}
