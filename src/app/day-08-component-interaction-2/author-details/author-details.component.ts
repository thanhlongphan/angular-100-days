import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from '../author-list/author-list.component';

@Component({
  selector: 'app-author-details',
  template: `
    <div *ngIf="author">
      <strong>{{ author.firstName }} {{ author.lastName }}</strong>
      <button (click)="handleDelete()">x</button>
    </div>
  `,
  styleUrls: ['./author-details.component.css'],
})
export class AuthorDetailsComponent implements OnInit {
  @Input() author: Author;
  @Output() deleteAuthor = new EventEmitter<Author>();
  constructor() {}

  ngOnInit() {}
  //thong tin ve Author khong phai cua Author Details, vi vay no ko duoc phep modify author,
  //vay nen chung ta phai gui 1 event cho parent componenet (AuthorList) de bao rang chung ta muon xoa phan tu nay
  handleDelete() {
    this.deleteAuthor.emit(this.author);
  }
}
