import { Component, Injectable, OnInit } from '@angular/core';
import { StoriesService } from '../../service/stories.service';
import { IStories } from '../../interface/stories';
import { DifferenceTime } from 'src/utils/helpers/parseDate';
import { ModalCommentsComponent } from '../modal-comments/modal-comments.component';
import { MatDialog } from '@angular/material/dialog';
import { setWithExpiry } from 'src/utils/helpers/localStorage';
import { Observable, from, of, take } from 'rxjs';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
@Injectable()
export class StoriesComponent implements OnInit {
  dataStories: IStories[] = []
  differenceTime = DifferenceTime
  constructor(private readonly storiesService: StoriesService, public refModalComment: MatDialog) {
  }

  ngOnInit(): void {
    this.getAllData()
  }

  getAllData(): void {
    this.storiesService.getAllStories().subscribe((stories) => {
      const tempData: IStories[] = []
      for (const v of stories.slice(0, 20)) {
        this.storiesService.getDetailStories(v).subscribe((story) => {
          tempData.push(story)
        })
      }
      this.dataStories = tempData
    })
  }


  openDetailComment(val: IStories): void {
    const dialogRef = this.refModalComment.open(ModalCommentsComponent, { width: '40vw', disableClose: true, data: val })
  }
}
