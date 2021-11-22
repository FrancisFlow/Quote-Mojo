import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
@Input() quote!: Quote;

// delete function event-emitter
 @Output() toDelete= new EventEmitter<boolean>();

 deleteQuote (Delete:boolean) {
   this.toDelete.emit(Delete)
 }

 //upvote function event emitter

 @Output() upThisVote= new EventEmitter<boolean>();

 upTheVote(up:boolean) {
   this.upThisVote.emit(up)
 }

// event emitter for downVote

@Output() downThisVote = new EventEmitter<boolean>();

  downTheVote(down:boolean) {
    this.downThisVote.emit(down)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
