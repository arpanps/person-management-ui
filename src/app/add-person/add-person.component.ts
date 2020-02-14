import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../person.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Person } from '../person';  

@Component({  
  selector: 'app-add-person',  
  templateUrl: './add-person.component.html',  
  styleUrls: ['./add-person.component.css']  
}) 
 
export class AddPersonComponent implements OnInit {  
  
  constructor(private personservice:PersonService) { }  
  
  person : Person=new Person();  
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  
  personsaveform=new FormGroup({  
    first_name:new FormControl('' , [Validators.required, Validators.minLength(5) ] ),  
    last_name:new FormControl('',[Validators.required,  Validators.minLength(5) ]),  
    age:new FormControl(),
	favourite_colour:new FormControl()   
  });  
  
  savePerson(savePerson){  
    this.person=new Person();     
    this.person.first_name=this.PersonFirstName.value;  
    this.person.last_name=this.PersonLastName.value;  
    this.person.age=this.PersonAge.value;  
	this.person.favourite_colour = this.PersonFavouriteColour.value;

    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
      console.log(this.person);  

    this.personservice.createPerson(this.person)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.person = new Person();  
  }  
  
  get PersonFirstName(){  
    return this.personsaveform.get('first_name');  
  }  
  
  get PersonLastName(){  
    return this.personsaveform.get('last_name');  
  }  
  
  get PersonAge(){  
    return this.personsaveform.get('age');  
  }  
  get PersonFavouriteColour(){  
    return this.personsaveform.get('favourite_colour');  
  } 
  addPersonForm(){  
    this.submitted=false;  
    this.personsaveform.reset();  
  }  
} 


