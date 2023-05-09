# NGX-SMSCountDown

在注册或登录页面常有 发送短信验证码或邮箱验证码等数秒操作

[![NPM version](https://img.shields.io/npm/v/ngx-smscountdown.svg)](https://www.npmjs.com/package/ngx-smscountdown)

## Usage

### 1. Install

```
npm install ngx-smscountdown --save
```

import `SMSCountDownModule`。

```typescript
import { SMSCountDownModule } from 'smscount-down;

@NgModule({
  imports: [ BrowserModule, SMSCountDownModule ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### 2、Template

```html
<button SMSCountDown Text="发送短信验证码" CountText="{leftSec}秒后可重发" [SendFun]="sendSMS">发送短信验证码</button>

<button SMSCountDown Text="发送邮箱验证码" CountText="重发剩余{leftSec}秒..." CompleteText="重新发送" [MaxCounting]="8" [SendFun]="sendSMS">发送邮箱验证码</button>
```

```typescript
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

```