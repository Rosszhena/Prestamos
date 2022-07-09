import { Component, OnInit } from '@angular/core';

import { Prestamos } from 'src/app/prestamos.model';
import { PrestamosService } from 'src/app/prestamos.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {
  Prestamos : Prestamos[]

  constructor( private PrestamosService: PrestamosService) { }

  ngOnInit(): void {
    //console.log("hola");
    this.PrestamosService.getSolicitudes().subscribe( (res) => {
      this.Prestamos = res.map( (e) => {
        //console.log("payloadddd" + e.payload);
        return {
        id: e.payload.doc.id,
        ...(e.payload.doc.data() as Prestamos)

      };
    });
    });

    }



    deleteRow = (sol) => { this.PrestamosService.deleteSolicitudes

    }

}
