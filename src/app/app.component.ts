import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'countries';

  constructor(private api: ApiService){}
  
  ngOnInit(){
    // this.api.getAllCountries().subscribe((res) => console.log(res))
  }

}
