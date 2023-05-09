import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sendSMS = async ()=>{
    let result = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        console.log('发送成功')
        resolve(true);
      }, 1000);
    })
    return result
  } 
}
