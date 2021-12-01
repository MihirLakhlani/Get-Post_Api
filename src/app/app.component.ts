import { Component } from '@angular/core';
import {UsersdataService} from './services/usersdata.service'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http';
  users:any
  constructor(private userdata:UsersdataService)
  {
    userdata.users().subscribe((data)=>{
      console.log("data",data)

      this.users=data
    });
    //console.log(this.users)
  }
  getuserformdata(data:any)
  {
    this.userdata.saveUsers(data).subscribe((result:any)=>(
      console.log(result)
    ))
  }
}
