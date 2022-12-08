import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  admno=""
  
  searchdata:any=[]
  constructor(private api:ApiService,private route:Router){}
  readValues=()=>
  {
    let data:any={
      "admno":this.admno
    }
  console.log(data)
  this.api.searchStudent(data).subscribe(
    (response:any)=>

    {

      console.log(response)

      if(response.length==0)

      {

         alert("no data")

      }
      else{
        this.searchdata = response
      }

    }

  )
  }
  deletebuttonclick=(id:any)=>{
    let data:any={
      "id":id
    }
    this.api.deleteStudent(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {

          alert("Deleted");
          this.route.navigate(['/view'])
        } 
        else {
          alert("invalid input");
        }

      }
    )
  }
}
