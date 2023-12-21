import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialogModule,
  MAT_DIALOG_DATA
} from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon';
import { DifferenceTime } from 'src/utils/helpers/parseDate';
import { IStories } from '../../interface/stories';
import { StoriesService } from '../../service/stories.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-comments',
  templateUrl: './modal-comments.component.html',
  styleUrls: ['./modal-comments.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatIconModule, CommonModule]
})

export class ModalCommentsComponent implements OnInit {
  differenceTime = DifferenceTime
  dataStories: IStories[] = []
  constructor(@Inject(MAT_DIALOG_DATA) public data: IStories, private readonly storiesService: StoriesService) {
  }

  ngOnInit(): void {
    this.getAllData()
  }

  getAllData() {
    const tempData: IStories[] = []
    this.data.kids?.forEach((v) => {
      this.storiesService.getDetailStories(v).subscribe((story) => {
        tempData.push(story)
      })
    })
    this.dataStories = tempData
  }
}
