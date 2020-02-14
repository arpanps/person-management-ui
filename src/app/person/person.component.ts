import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PersonService } from '../person.service';  
import { Person } from '../person';  
import { Observable,Subject } from "rxjs";  


import {FormControl,FormGroup,Validators} from '@angular/forms';  

@Component({  
  selector: 'app-person',  
  templateUrl: './person.component.html',  
  styleUrls: ['./person.component.css']  
})  

export class PersonComponent implements OnInit {  
  
 constructor(private personservice:PersonService) { }  
  
  personsArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  
  persons: any;  
  person : Person=new Person();  
  deleteMessage=false;  
  personlist:any;  
  isupdated = false;      
   
  
  ngOnInit() {  
    this.isupdated=false;  
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    };     
    this.personservice.getPersonList().subscribe(data =>{  
    this.persons =data;  
    this.dtTrigger.next();  
    })  
  }  
    
  deletePerson(id: number) {  
    this.personservice.deletePerson(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.personservice.getPersonList().subscribe(data =>{  
            this.persons =data  
            })  
        },  
        error => console.log(error));  
  }  
  
  updatePerson(id: number){  
    this.personservice.getPerson(id)  
      .subscribe(  
        data => {  
          this.personlist=data             
        },  
        error => console.log(error));  
  }  
  
  personupdateform=new FormGroup({  
    id:new FormControl(),  
    first_name:new FormControl(),  
    last_name:new FormControl(),  
    age:new FormControl(),
	favourite_colour:new FormControl()  
  });  
  
  updateStu(updstu){  
    this.person=new Person();   
   this.person.id=this.PersonId.value;  
   this.person.first_name=this.PersonFirstName.value;  
   this.person.last_name=this.PersonLastName.value;  
   this.person.age=this.PersonAge.value; 
   this.person.favourite_colour = this.PersonFavouriteColour.value; 
   console.log(this.PersonAge.value);  
     
  
   this.personservice.updatePerson(this.person.id,this.person).subscribe(  
    data => {       
      this.isupdated=true;  
      this.personservice.getPersonList().subscribe(data =>{  
        this.persons =data 
 
        })  
    },  
    error => console.log(error));  
  }  
  
  get PersonFirstName(){  
    return this.personupdateform.get('first_name');  
  }  
  
  get PersonLastName(){  
    return this.personupdateform.get('last_name');  
  }  
  
  get PersonAge(){  
    return this.personupdateform.get('age');  
  }  
  
  get PersonFavouriteColour(){  
    return this.personupdateform.get('favourite_colour');  
  } 

  get PersonId(){  
    return this.personupdateform.get('id');  
  }  
  
  changeisUpdate(){  
    this.isupdated=false;  
  }  
}  