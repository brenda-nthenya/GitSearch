export class User {
    constructor(
        public id: number,
        public name: string,
        public bio: string,
        public photo: string,
        public repos: string,
        public reposNumber: number,
        public followers: number,
        public following: number,
        public dateCreated: Date
      ) {}
}
