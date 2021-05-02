import { stringify } from 'querystring';


export interface BreakingBadReview {
    id: string;
    Name: string;
    Review: string;
}

export class Reviews {
    id: string;
    Name: string;
    Review: string;

    constructor(Name: string, Review: string) {
        this.Name = Name;
        this.Review = Review;
    }

}