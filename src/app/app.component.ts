import { EngService } from './eng.service';
import { Subscription, timer } from 'rxjs';
import { Component } from '@angular/core';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'root';
  Subscription: any;
  response: any;
  tableData: any;
  row: any;
  searchText;
  constructor(private ser: EngService){}
  ngOnInit(){
    this.Subscription=timer(0,1000).pipe(switchMap(()=>this.ser.getData())).subscribe(res=>{
      this.response=res;
      this.tableData=this.response.hits;
      console.log("Data",this.tableData);
    })
  }
  public selectRow(e){
    this.row=e;
  }
}
