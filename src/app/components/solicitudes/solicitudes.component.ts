import { Component, OnInit } from '@angular/core';

import { Prestamos } from 'src/app/prestamos.model';
import { PrestamosService } from 'src/app/prestamos.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {
  prestamos  : Prestamos[]

  constructor( private prestamosService: PrestamosService) { }

  ngOnInit(): void {

    this.prestamosService.getSolicitudes().subscribe( (res) => {
      this.prestamos = res.map( (e) => {

        return {
        id: e.payload.doc.id,
        ...(e.payload.doc.data() as Prestamos)

      };
    });
    console.log(this.prestamos);
    });

    }



    deleteRow = (sol) => { this.prestamosService.deleteSolicitudes

    }

}
