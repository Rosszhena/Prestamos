import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Prestamos } from 'src/app/prestamos.model';
import { PrestamosService } from 'src/app/prestamos.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

prestamos: Prestamos;
  constructor(
    private route: ActivatedRoute,
    private PrestamosService: PrestamosService,
    private location: Location
    ) { }

  ngOnInit(): void {
  }

}
