import { stringify } from 'querystring';


export interface BreakingBadReview {
    Name: string;
    Review: string;
}

export class Reviews {
    Name: string;
    Review: string;

    constructor(Name: string, Review: string) {
        this.Name = Name;
        this.Review = Review;
    }

}