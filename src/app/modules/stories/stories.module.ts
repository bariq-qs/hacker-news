import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesComponent } from './views/list-stories/stories.component';


@NgModule({
  declarations: [
    StoriesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StoriesModule { }
