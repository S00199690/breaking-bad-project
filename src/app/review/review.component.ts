import { Component, OnInit, Input } from '@angular/core';
import { BreakingBadReview, Reviews } from '../interfaces/breakingbadreview';
import { BreakingBadApiService } from '../services/breaking-bad-api.service';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
  providers: [BreakingBadApiService]
})
export class ReviewComponent implements OnInit {
  @Input() reviewData: BreakingBadReview;
  constructor(private _reviewService: ReviewService) { }

  ngOnInit() {

  }

  deleteReview(reviewId: string) {
    console.log(reviewId);
    this._reviewService.delReviewData(reviewId);
  }

}
