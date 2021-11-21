export class Quote {
    constructor(
        public aQuote:string, 
        public author:string,
        public iSubmit:string,
        
        public upVote:number,
        public downVote:number,
        public dayOfPosting: Date

    ){}

}
