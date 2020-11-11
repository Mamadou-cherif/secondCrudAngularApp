import { Component, OnInit } from '@angular/core';
import { ConfigService } from "src/app/services/config.service"
import { Personne } from "src/app/models/personne"
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css']
})
export class AddPersonneComponent implements OnInit {

  personne: Personne= new Personne();

  constructor(private _router: Router,private config: ConfigService,private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const isIdPresent = this._activatedRoute.snapshot.paramMap.has('id');
    if (isIdPresent) {
        const id = +this._activatedRoute.snapshot.paramMap.get('id');
        this.config.getPersonne(id).subscribe(
          data => this.personne = data 
        )
    }

  }

  savePersonne() {
    this.config.savePersonne(this.personne).subscribe(
      data => {
        console.log('response', data);
       this._router.navigateByUrl("/personne");
      }
    )
  }

  deletePersonne(id: number) {
    this.config.deletePersonne(id).subscribe(
      data => {
        console.log('deleted response', data);
        this._router.navigateByUrl('/personne');
      }
    )
  }

}
