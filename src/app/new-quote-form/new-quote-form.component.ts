import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-new-quote-form',
  templateUrl: './new-quote-form.component.html',
  styleUrls: ['./new-quote-form.component.css']
})
export class NewQuoteFormComponent implements OnInit {

  newQuote= new Quote("", "", "", 0, 0, new Date())
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote() {
    this.addQuote.emit(this.newQuote);
    this.newQuote= new Quote("", "", "", 0, 0, new Date());

  }


  constructor() { }

  ngOnInit(): void {
  }

}
