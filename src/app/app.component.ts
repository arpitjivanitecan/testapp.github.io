import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService} from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'capApp';
  joke:any;
  update: boolean = false;
  constructor(updates : SwUpdate,private data: DataService){
    updates.versionUpdates.subscribe(event => {
      // this.update = true;
      updates.activateUpdate().then(()=>document.location.reload());
    })
  }

    ngOnInit(){
      this.data.giveMeJokes().subscribe(res => {
        this.joke = res;
      })
    }

}
