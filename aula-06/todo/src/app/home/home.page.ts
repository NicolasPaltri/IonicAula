import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tasks = [
    {description: 'Acorda'},
    {description: 'Escovar os dentes'},
    {description: 'Compra pão'},
    {description: 'Tomar café'}
  ];
  constructor(private alertController: AlertController, 
    private toastControle:ToastController) {}



 async showAdd(){
  const alert = await this.alertController.create({
    header:'O que deseja fazer?',
    inputs:[
      {name:'task',
       type:'text',
       placeholder:'Digite a tarefa' 
      }
    ],
    buttons:[
      {
        text:'Cancelar',
        handler:() => {console.log('Cancelou...')}
      },
      {
        text:'Adicionar',
        handler: (form) => {this.incluir(form.task)}
      }
    ]
  });
  alert.present();
  }
  apagar(){
    
    
  }
  altera(){
    
    
  }

   async incluir(newTask: string){
      if(newTask.trim().length < 1){
        const toast = await this.toastControle.create({
          message:'Informe sua tarefa!!!',
          duration: 3000,
          position:'top',
          color: 'warning'
        });
        toast.present();
      }else{
        this.tasks.push({description: newTask});
  }
  }
}
