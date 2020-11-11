import { Component, OnInit } from '@angular/core';
import  {Personne} from "src/app/models/personne"
import {ConfigService} from "src/app/services/config.service"
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list-personne',
  templateUrl: './list-personne.component.html',
  styleUrls: ['./list-personne.component.css']
})
export class ListPersonneComponent implements OnInit {

  personne: Personne[] = [];
  pproperty: number;
  constructor(private _router: Router,private perso: ConfigService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //this.listPersonnes()
  this.listPersonnes()
  }

  listPersonnes() {
    this.perso.getPersonnes().subscribe(
      data => this.personne = data
    )
  }

  deletePersonne(personne:Personne) {
    this.perso.deletePersonne(personne.id).subscribe(
      data => {
        console.log('deleted response', data);
        this._router.navigateByUrl('/personne');
      }
    )
  }

}
