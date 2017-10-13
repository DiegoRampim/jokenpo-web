import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) {}

  public escolha = {name: 'Diego', played : ''};
  public results = null;

  public enviarBack(): void {
    console.log('Chamou');

    this.http.post('http://localhost:3000/single', this.escolha).subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data;
      console.log(JSON.stringify(data));
    });



  }

  public setPlayed(played: string) {
    this.escolha.played = played;
  }

  public newGame() {
    this.results = null;
    this.escolha.played = null;
  }
}
