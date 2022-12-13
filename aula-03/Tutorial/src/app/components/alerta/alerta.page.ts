import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {

 async presentAlert() {
const mensagem = await this.alerta.create({
  header:'Alerta',
  subHeader:'Mensagem',
  message:'Pei na torre !!!!!',
  buttons:['Ok']
});
mensagem.present();

}

async alert(){
  const mensagem = await this.alerta.create({
    header:'Mensagem',
    message:'Vai saindo ai!',
    buttons:['Ok', 'Cancelar']
  });

  mensagem.present();

}

async custom(){
  const mensagem = await this.alerta.create({
    header:'Confirma',
    message:'Confirma a Gravação?',
    buttons:[{text: 'Ok', handler: () => {console.log('Vou gravar!')}},
             {text: 'Cancelar', handler: () => {console.log('Desista!')}}]
  });

  mensagem.present();

}

  constructor(private alerta: AlertController) { }

  ngOnInit() {
  }


}
