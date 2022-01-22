import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  //users = ['ryan', 'joe', 'cameron'];
  //activated: boolean = false;
  name: string = 'Daniel Perez';
  age: number = 39;
  address: {
    street: string;
    city: string;
  };
  hobbies: string[];
  //public posts: Post[];
  posts: any = [];

  addHobbie(newHobbie) {
    console.log(newHobbie.value);
    this.hobbies.push(newHobbie.value);
    newHobbie.value = '';
    newHobbie.focus();
    return false;
  }

  sayHello() {
    alert('Hello');
  }

  deleteHobbie(hobbie) {
    for (let i=0; i< this.hobbies.length; i++) {
      if (hobbie == this.hobbies[i]) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  constructor(private dataService: DataService) {
    //this.age = 28;
    this.address = {
      street: '221B Baker Street',
      city: 'London'
    };
    this.hobbies = ['swimming','read', 'write'];
    this.dataService.getData().subscribe(data => {
      this.posts = data;
    });
  }
}
