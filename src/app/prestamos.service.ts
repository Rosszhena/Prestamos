import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Prestamos } from './prestamos.model';

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {

  constructor(private angularFirestore: AngularFirestore) { }

  getSolicitudes(){
    return this.angularFirestore
              .collection("solicitudes")
              .snapshotChanges()

  }

  getSolicitudesById(id) {
    return this.angularFirestore
              .collection("solicitudes")
              .doc(id)
              .valueChanges()

  }
  createSolicitudes(prestamos:Prestamos){
    return new Promise<any> (( resolve, reject ) => {
      this.angularFirestore
        .collection("solicitudes")
        .add(prestamos)
        .then(( response) => {
          console.log(response)
        },
        (error) => {
          reject(error)
        })
    })

  }
  updateSolicitudes(prestamos:Prestamos, id) {
    return this.angularFirestore
      .collection("solicitudes")
      .doc(id)
      .update({
        usuario: prestamos.usuario,
        estatus: prestamos.estatus

      })

  }
  deleteSolicitudes(prestamos) {
    return this.angularFirestore
      .collection('solicitudes')
      .doc(prestamos.id)
      .delete()

  }
}
