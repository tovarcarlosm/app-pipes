import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-pipes';

  saludo = "HoLa muNDo";
  numero = 20.5156;
  pago = 1540;
  fecha = new Date();

  estudiante = {
    nombre: "Carlos",
    apellido: "Tovar",
    profesion: "Ing. de Sistemas",
    direccion: {
      nomenclatura: "Calle 1 # 1-01",
      barrio: "Centro",
      ciudad: "Cali"
    },
    email: "carlos@tovar.com"
  }

  promesa = new Promise( (resolve) => {
    setTimeout(() => {
      resolve("Datos recibidos!!!");
    }, 5000);
  });
}
