import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { BreakingBadReview } from '../interfaces/breakingbadreview';
import { AngularFirestoreCollection, AngularFirestore } from "@angular/fire/firestore";
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  reviewDataCollection: AngularFirestoreCollection<BreakingBadReview>;

  reviewData: Observable<BreakingBadReview[]>;

  allReviewData: BreakingBadReview[];

  errorMessage: string;

  constructor(private _http: HttpClient, private _afs: AngularFirestore) {
    this.reviewDataCollection = _afs.collection<BreakingBadReview>("reviews");
  }

  getReviewData(): Observable<BreakingBadReview[]> {
    this.reviewData = this.reviewDataCollection.valueChanges(({ idField: 'id' }));
    this.reviewData.subscribe(
      data => console.log("GetReviewData:" + JSON.stringify(data))
    )

    return this.reviewData;
  }

  addReviewData(review: BreakingBadReview): void {
    this.reviewDataCollection.add(JSON.parse(JSON.stringify(review)));
  }

  delReviewData(reviewId: string): void {
    ``
    this.reviewDataCollection.doc(reviewId).delete();
  }

  private handleError(err: HttpErrorResponse) {
    console.log('ReviewService: ' + err.message);
    return Observable.throw(err.message);
  }
}
