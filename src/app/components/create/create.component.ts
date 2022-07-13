import { Component, OnInit } from '@angular/core';

import { PrestamosService } from 'src/app/prestamos.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public solForm: FormGroup

  constructor(
    public prestamosService: PrestamosService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    this.solForm = this.formBuilder.group({
      usuario : [''],
      valorSolicitado : [''],
      fechaPago : [''],
      estatus : ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.prestamosService.createSolicitudes(this.solForm.value)
    this.router.navigate([''])
  }

}
