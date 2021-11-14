import { Component } from '@angular/core';
import {User} from './User';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudOp';
  constructor(private restService: RestService){}

  columns = ["user Id", "first Name", "last Name", "email", "location"];
  arrusers:User[] = [];
  recordNum = "";

  ngOnInit() {
      this.readData();
  }

  readData(){
      this.restService.getUsers().subscribe(
          (data : any )=> {
              this.arrusers = data;
          },
          (error : any) => console.log(error)
      )
  }

  insertRecord() {
    let userObj = new User(203, "Kaku", "Bhuyan", "kaku@gmail.com", "Chennai");
    this.restService.insertData(userObj).subscribe(
      (data : any) => {
        this.readData()
      },
      (error : any) => console.log(error)
    );
  }

  deleteRecord(){
    console.log("delete, " + this.recordNum)
    this.restService.deleteRecord(this.recordNum).subscribe(
      (data : any) => {
        this.readData();
      },
      (error : any) => console.log(error)
    );
  }

}
