import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private searchForm     : FormGroup;
  private showSearchLocations: boolean;
  private showSearchSuggestions: boolean;
  private showSearchTyping: boolean;


  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.showSearchLocations = false;
    this.showSearchSuggestions = false;
    this.showSearchTyping = false;
    
    this.searchForm = this.formBuilder.group({
      search: [null, Validators.required]
    });

    
  }

  onClickLocation(): void {
    this.showSearchLocations = true;
    console.log($("#modal_signin"))
    $("#modal_signin").modal('toggle');
  }

  onBlurLocation(): void {
    this.showSearchLocations = false;
  }

  onClickSearch(): void {
    this.showSearchSuggestions = true;
    this.showSearchLocations = false;
  }

  onBlurSearch(): void {
    this.showSearchSuggestions = false;
    this.showSearchTyping = false;
  }

  handleKeyupSearch(event: any): void {
    console.log(event.target.value);
    this.showSearchSuggestions = false;
    this.showSearchTyping = true;
  }

}
