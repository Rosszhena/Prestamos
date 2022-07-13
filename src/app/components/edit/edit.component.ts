import { Component, OnInit } from '@angular/core';

import { PrestamosService } from 'src/app/prestamos.service';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public editForm: FormGroup
  solRef:any

  constructor(
    public prestamosService: PrestamosService,
    public formBuilder: FormBuilder,
    private activateRoute: ActivatedRoute,
    private router: Router
    ) {
      this.editForm = this.formBuilder.group({
        usuario : [''],
        valorSolicitado : [],
        fechaPago : [''],
        estatus : ['']
      })
    }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id')
    this.prestamosService.getSolicitudesById(id).subscribe (res => {
      this.solRef = res
      console.log(this.solRef)
      this.editForm = this.formBuilder.group({
        usuario: [this.solRef.usuario],
        valorSolicitado: [this.solRef.valorSolicitado],
        fechaPago: [this.solRef.fechaPago],
        estatus: [this.solRef.estatus],

      })
    })

  }
    onSubmit() {
      const id = this.activateRoute.snapshot.paramMap.get('id')
      this.prestamosService.updateSolicitudes(this.editForm.value, id)
      this.router.navigate([''])

    }

  }


