import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonDto } from '../../Model/person-dto';
import { PersonService } from '../../Services/person.service';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent {
  searchForm!: FormGroup;
  persons: PersonDto[] = [];

  constructor(private fb: FormBuilder, private personService: PersonService) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
    });
  }
  
  onSubmit(): void {
    console.log("SUBMIT")
    const personToFind: PersonDto = {
      idPerson: null,
      lastname: this.searchForm.value.lastname,
      firstname: this.searchForm.value.firstname,
    };
    this.personService.findByLastnameAndFirstname(personToFind)
      .subscribe(persons => this.persons=persons);
  }

}
