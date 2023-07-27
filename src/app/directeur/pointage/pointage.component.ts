import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {allFakers, faker} from '@faker-js/faker';

@Component({
  selector: 'app-pointage',
  templateUrl: './pointage.component.html',
  styleUrls: ['./pointage.component.scss']
})
export class PointageComponent implements OnInit {
  title;
  entrees: any = [];

  constructor(private activatedRoute: ActivatedRoute) {
    this.title = activatedRoute.routeConfig?.path?.replace('pointages/', '');
  }

  ngOnInit(): void {
    for (let i = 0; i < 9; i++) {
      try {
        this.entrees.push({
          nom: allFakers.fr.person.firstName() + ' ' + allFakers.fr.person.lastName(),
          email: allFakers.fr.internet.email(),
          date: allFakers.fr.date.past().toLocaleDateString('fr-FR'),
          heureEntree: allFakers.fr.date.anytime(),
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
