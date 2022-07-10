import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent implements OnInit, OnChanges{
  //pass data from parent to child with input binding
  //@input(): property decorator (dung de truyen du lieu tu parent sang child), dung de gan them meta data cho property phia sau no. neu ko khai bao @input() thi se khong nhan duoc gia tri truyen vao tu component khac
  @Input() progress = 0;
  @Input() progressColor: string;
  @Input() backgroundColor: string;
  //ham khoi tao cua 1 class, chi chay 1 lan duy nhat
  constructor() {}
  //duoc chay sau khi constructor chay va cac input da duoc binding
  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if ("progress" in changes) {
      if (typeof changes["progress"].currentValue !== "number") {
        const progress = Number(changes["progress"].currentValue);
        if (Number.isNaN(progress)) {
          this.progress = 0;
        } else {
          this.progress = progress;
        }
      }
    }
  }
}
