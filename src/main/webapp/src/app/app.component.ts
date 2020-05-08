import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webapp';
  result = '';

  constructor(private http: HttpClient) {}
  products = [];
  fetchData = function() {
    this.http.get('https://api.myjson.com/bins/8rpp2').subscribe(
      (res) => {
        this.products = res;
      },
      (error) => {
          console.log(error)
      }
    );
  };
  ngOnInit() {
    this.fetchData();
  }

  private sayHello(): void {
      this.result = 'loading...';
      this.http.get<any>('/api/hello-world').subscribe(
      (res) => {
              this.result = res;
            },
      (error) => {
                this.result = error.error.text;
                console.log(error);
            }
      );
    }

}
