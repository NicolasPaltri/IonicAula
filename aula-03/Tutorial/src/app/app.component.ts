import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Navegação', url: 'navegacao', icon: 'navigate-circle' },
    { title: 'Botões', url: 'buttons', icon: 'help-circle' },
    { title: 'Alertas', url: 'alerta', icon: 'chatbubble' }
   
    
  ];
  public labels = ['Senac'];
  constructor() {}
}
