// login.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showLoginForm = false; // Variable para controlar la visibilidad del formulario
  username = '';
  password = '';

  login() {
    // Lógica para mostrar el formulario de inicio de sesión
    this.showLoginForm = true;
  }

  signIn() {
    // Lógica para registrarse
    // Puedes navegar a la página de registro o mostrar un formulario de registro
  }

  onSubmit() {
    // Lógica para procesar el formulario de inicio de sesión
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    // Aquí puedes realizar una llamada a tu servicio o API para manejar la autenticación
  }
}

