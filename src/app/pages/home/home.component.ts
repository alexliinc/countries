import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Country } from 'src/app/types/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchFilter: String | undefined;
  countries$: Observable<Country[]> | undefined;  

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.countries$ = this.api.getAllCountries();
  }

}
