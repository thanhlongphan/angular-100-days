import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProgressBarComponent } from './day-07-component-interaction/progress-bar/progress-bar.component';
import { AuthorListComponent } from './day-08-component-interaction-2/author-list/author-list.component';
import { AuthorDetailsComponent } from './day-08-component-interaction-2/author-details/author-details.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ProgressBarComponent, AuthorDetailsComponent, AuthorListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
