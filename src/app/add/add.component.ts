import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
 constructor(private api:ApiService){}
  name = ""
  admno = ""
  rollno = ""
  college = ""
  readValues=()=>{
    let data:any={
      "name":this.name,
      "admno":this.admno,
      "rollno":this.rollno,
      "college":this.college
    }
    console.log(data)
    this.api.addStudent(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {

          alert("Successfully added");
          this.name=""
          this.admno=""
          this.rollno=""
          this.college=""
          
        } else {
          alert("Someting went wrong")
        }
      }
    )
  }
}
