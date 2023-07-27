import { Component, OnInit } from '@angular/core';
import {allFakers, faker, fr} from '@faker-js/faker';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  users: any = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 9; i++) {
      try {
        this.users.push({
          nom: allFakers.fr.person.firstName() + ' ' + allFakers.fr.person.lastName(),
          email: allFakers.fr.internet.email(),
          dateNaissance: allFakers.fr.date.past().toLocaleDateString('fr-FR'),
          adresse: allFakers.fr.location.streetAddress(),
          role: this.getRandomRole(),
          matricule: 'EMP' + faker.number.int({ min: 10000000, max: 99999999 }),
        });
      } catch (e) {
        console.log(`In locale , an error occurred: ${e}`);
      }
    }
  }

  getRandomRole() {
    const roles = ['Comptable', 'Chauffeur', 'RH', 'Vigile', 'Concepteur'];
    return faker.helpers.arrayElement(roles);
  }

}
