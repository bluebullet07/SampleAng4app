import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
name: string;
age: number;
email = 'abc@ang.com';
address:Address;
hobbies:string[];

  constructor() { 
console.log('constructor ran..');
this.name = 'Archana';
  }

  ngOnInit() 
  {
    console.log('ngonit ran..');
    this.name = 'praba';
    this.age = 63;
    this.address = 
    {
      street:'new street',
      city:'new city',
      state:'new state'
    }
    this.hobbies = ['listen to music','watch movies','cooking'];
    }
    onClick(){
      this.name = 'Kesavan';
      this.hobbies.push('new hobby');
    }    

    addHobby(hobby)
{
  console.log(hobby);
  return false;
}
    }

interface Address
{
    street:string,
    city:string,
    state:string
}