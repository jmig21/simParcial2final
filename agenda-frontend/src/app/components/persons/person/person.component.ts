import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonListComponent implements OnInit {
viewDetails(_t5: any) {
throw new Error('Method not implemented.');
}
  persons: any[] = [];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getPersons().subscribe(data => {
      this.persons = data;
    });
  }
}
