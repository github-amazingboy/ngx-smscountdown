import { Component, ElementRef, Input, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { take, timer } from 'rxjs';

@Component({
  selector: 'button[SMSCountDown]',
  template: `{{showText}}`,
  styles: [
  ],
  host: {
    "[class.smscountdown]": "true"
  }
})
export class SMSCountDownComponent implements OnInit, AfterViewInit {

  showText: string = ""
  text: string = "发送验证码"

  constructor(private ref: ElementRef) {
  }

  ngAfterViewInit(): void {
  }

  @Input()
  set Text(v: string) {
    this.text = v
  }

  get Text(): string {
    return this.text
  }

  @Input()
  CountText:string = "{leftSec}秒后可重发"

  @Input()
  CompleteText!:string

  @Input()
  MaxCounting:number = 60

  @Input()
  SendFun!:() => Promise<boolean>;

  @HostListener('click', ['$event'])
  async sent($event: MouseEvent){
    let btn = this.ref.nativeElement as HTMLButtonElement
    btn.disabled = true
    let sentResult = await this.SendFun()
    if(sentResult){
      //第一个0 表示立即执行
      //1000 表示间隔1s
      timer(0, 1000).pipe(take(this.MaxCounting+1)).subscribe(
        {
          next: x=> {
            let leftSec = this.MaxCounting - x
            this.showText = this.CountText.replace("{leftSec}",leftSec+"")
          },
          complete:()=>{
            this.showText = this.CompleteText
            btn.disabled = false
          },
          error:()=>{
            btn.disabled = false
          }
        }
      )
    }else{
        btn.disabled = false
    }
  }

  ngOnInit(): void {
    this.showText = this.Text
    if(!this.CompleteText) this.CompleteText = this.Text
  }

}

