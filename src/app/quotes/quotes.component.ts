import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quote[]= [
    new Quote("The only limit to our realization of tomorrow will be our doubts today", "Franklin D.", "Daniel Roth", 0, 0, new Date(2020, 12, 5)),
    new Quote("Some people look for a beautiful place. Others make a beautiful place", "anonymous", "Kennedy Kamiro", 0, 0, new Date(2021, 4, 20)),
    new Quote("Keep your face to the sunshine and you cannot see a shadow", "Hellen Keller", "Walter Whitman", 0, 0, new Date(2021, 5, 23)),
    new Quote("Nobody ever wrote a plan to be broke, fat, lazy or stupid. those things are what happen when you don't have a plan", "Larry Winget", "Michelle Muthoni", 0, 0, new Date(2021, 7, 22)),
    new Quote("A single grain of rice can tip the scale, an extra second", "Emperor", "Faith Kamau", 0, 0, new Date(2021, 8, 22)),
    new Quote("No matter how the wind howls, the mountain cannot bow to it", "Mula", "Disney Okumu", 0, 0, new Date(2021, 3, 16))
  ];

  // function to show and hide details

  toggleDetails(index: number) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  // function to delete-quote

  nowDelete(toDelete:boolean, index:number) {
    if(toDelete) {
      let deleteNow = confirm(`Are you sure you want to delete 
      ${this.quotes[index].aQuote} ?`)
      if(deleteNow) { this.quotes.splice(index, 1)}

}
  }

  // function to add upVotes

  addUpVote(upThisVote:boolean, index:number) {
    if(upThisVote){
    this.quotes[index].upVote++
    }
  }


  //  function to add a downVote

  addDownVote(downThisVote:boolean, index:number) {
    if(downThisVote){
    this.quotes[index].downVote--
  
    }
  }

// find the quote with the highest upvote

highestUpVote() {
  let highArray=[];

  for(let i = 0; i<this.quotes.length; i++) {
     highArray.push(this.quotes[i].upVote);
  }
  let highestVote = Math.max(...highArray);
  if(highestVote===0){
    return 1
  }
  else{
  return highestVote;
  }
}


// function for adding new Quote

addNewQuote(newQuote:Quote){
  this.quotes.push(newQuote);
 }

  constructor() { }

  ngOnInit(): void {
  }

}
