import { Component } from '@angular/core';
import { BreakingBadApiService } from './services/breaking-bad-api.service';
import { BreakingBadResponse } from './breakingbadresponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BreakingBadApiService]
})
export class AppComponent {
  characterData: BreakingBadResponse;
  errorMessage: any;

  constructor(private _breakingbadService: BreakingBadApiService) {

  }

  getCharacterDetails(characterName: string): boolean {
    this._breakingbadService.getCharacterData(characterName).subscribe(
      characterData => {
        this.characterData = characterData;
      },
      error => this.errorMessage = <any>error
    );
    return false;

  }

  getAllDetails(): boolean {
    this._breakingbadService.getAllData().subscribe(
      characterData => {
        this.characterData = characterData;
      },
      error => this.errorMessage = <any>error
    );
    return false;
    }



}

