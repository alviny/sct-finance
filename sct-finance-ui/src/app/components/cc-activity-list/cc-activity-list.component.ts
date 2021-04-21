import { Component, OnInit, Input } from '@angular/core';
import { CreditCardActivityService } from 'src/app/service/credit-card-activity.service';
import { CreditCardActivity } from 'src/app/model/credit-card-activity';

@Component({
  selector: 'app-cc-activity-list',
  templateUrl: './cc-activity-list.component.html',
  styleUrls: ['./cc-activity-list.component.css']
})
export class CcActivityListComponent implements OnInit {

  cc_activities: CreditCardActivity[] = [];
  currentCCActivity: CreditCardActivity | undefined;
  currentIndex :number = -1;
  //@Input() description = null;
  constructor(private ccService: CreditCardActivityService) { }

  ngOnInit(): void {
    this.retrieveCCActivities();
  }
  retrieveCCActivities(){
    this.ccService.getAll()
      .subscribe(
        data => {
          this.cc_activities = data;
        },
        error => {
          console.log(error);
        }
      );
  }
  refreshList():void {
    this.retrieveCCActivities();
    this.currentIndex = -1;
    //this.description = '';
  }
  setActiveCCActivity(cc_activity:CreditCardActivity, index:number): void{
    this.currentCCActivity = cc_activity;
    this.currentIndex = index;
  }
  /*
  searchDescription(): void {
    this.ccService.findByDescription(this.description)
      .subscribe(
        data => {
          this.cc_activities = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  */
}
