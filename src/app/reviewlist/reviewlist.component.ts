import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../services/review.service';
import { BreakingBadReview, Reviews } from '../interfaces/breakingbadreview';

@Component({
  selector: 'app-reviewlist',
  templateUrl: './reviewlist.component.html',
  styleUrls: ['./reviewlist.component.css'],
  providers: [ReviewService]
})
export class ReviewlistComponent implements OnInit {
  reviewData: BreakingBadReview[];
  show: boolean;

  constructor(private _reviewService: ReviewService) { }

  ngOnInit() {
    this._reviewService.getReviewData().subscribe(reviewData => { this.reviewData = reviewData });
  }

  addReview(Name: string, Review: string): boolean {
    let tempReview: BreakingBadReview;
    tempReview = new Reviews(Name, Review);
    this._reviewService.addReviewData(tempReview);
    return false;
  }
}
